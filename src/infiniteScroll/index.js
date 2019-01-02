// yepCom/infiniteScroll/infiniteScroll.js

const RefreshTitle={
  pullToRefresh: '下拉更新...',
  releaseToRefresh: '松手更新...',
  refreshing: '更新中...'
}

const MIN_REFRESH_DURATION = 1000;  // 下拉刷新显示的最小时间
const INDICATOR_BODY_MAX_SIZE = 75;
const INDICATOR_MAX_SIZE = 132;
const refreshLine = 'refreshLine';

let scrollWxDom = null;
// TODO 换loading仅仅只换loading里的样式，下拉高度和刷新位置不能改变！
Component({
  options: {
    multipleSlots: true
  },
  externalClasses: ['yepc-scroll'],
  /**
   * 组件的属性列表
   */
  properties: {
    loading: {
      type: Boolean,
      default: false
    },
    isEnd: {
      type: Boolean,
      default: false
    },
    moreSlot: {
      type: Boolean,
      default: false
    },
    loadingSlot: {
      type: Boolean,
      default: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    INDICATOR_MAX_SIZE: INDICATOR_MAX_SIZE,
    INDICATOR_BODY_MAX_SIZE: INDICATOR_BODY_MAX_SIZE,
    currentTitle: RefreshTitle.pullToRefresh,
    // 脚本设置滚动条位置，可能只需要refreshHeight这个参数
    refreshHeight: 0,
    toView: refreshLine, 
    // 手指拖拽中
    draging: false,
    // 刷新中
    _refreshing: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    scrollEnd() {
      if (!this.data.isEnd) {
        this.triggerEvent('scrollend');
      }
    },
    _onScrollStart(e) {
      this.setData({
        draging: true
      });
    },
    _onScroll({detail}) {
      const {INDICATOR_BODY_MAX_SIZE, INDICATOR_MAX_SIZE, _refreshing, draging} = this.data;
      const y = detail.scrollTop;

      // 大于IMS
      if (this.canDoNothing(y)) return;

      if (draging) {
        // 拖拽中、未更新、没有达到更新阈值
        if (!_refreshing && y > INDICATOR_BODY_MAX_SIZE && y < INDICATOR_MAX_SIZE) {
          this.setData({
            currentTitle: RefreshTitle.pullToRefresh
          });
        }
        // 拖拽中、未更新，达到更新阈值
        else if (!_refreshing && y <= INDICATOR_BODY_MAX_SIZE) {
          this.setData({
            currentTitle: RefreshTitle.releaseToRefresh
          });
        }
      } else {
        // 滚动中，达到更新阈值
        if (y <= INDICATOR_BODY_MAX_SIZE) {
          this.setData({
            refreshHeight: INDICATOR_MAX_SIZE - INDICATOR_BODY_MAX_SIZE
          });
        }
        // 滚动中，没有达到更新阈值
        else if (y > INDICATOR_BODY_MAX_SIZE && y < INDICATOR_MAX_SIZE) {
          this.setData({
            toView: refreshLine
          });
        }
      }
      if (_refreshing) {
        this.setData({
          currentTitle: RefreshTitle.refreshing
        });
      }
    },
    _onScrollEnd(e) {
      console.log('end')
      this.setData({
        draging: false,
      });
      scrollWxDom.scrollOffset().exec(res => {
        if (!this.canDoNothing(res[0].scrollTop)) {
          this._dragEnd(res[0].scrollTop);
        }
      });
    },
    _dragEnd(y) {
      const {INDICATOR_BODY_MAX_SIZE, INDICATOR_MAX_SIZE, _refreshing} = this.data;
      
      // 松手，未更新，未达到更新阈值
      if (!_refreshing && y > INDICATOR_BODY_MAX_SIZE && y < INDICATOR_MAX_SIZE) {
        this.setData({
          toView: refreshLine,
          currentTitle: RefreshTitle.pullToRefresh
        });
      }
      // 松手，未更新，达到更新阈值，触发更新回调
      else if (!_refreshing && y <= INDICATOR_BODY_MAX_SIZE) {
        this.setData({
          refreshHeight: INDICATOR_MAX_SIZE - INDICATOR_BODY_MAX_SIZE,
          _refreshing: true,
          currentTitle: RefreshTitle.refreshing
        });
        console.log('start refreshing')
        this.triggerEvent('refreshing', {resolve: this.refreshingComplete.bind(this)});
      }
      // 松手 更新中，达到更新阈值，仅仅位置回到更新中
      else if (_refreshing && y <= INDICATOR_BODY_MAX_SIZE) {
        this.setData({
          refreshHeight: INDICATOR_MAX_SIZE - INDICATOR_BODY_MAX_SIZE,
        });
      }
      if (_refreshing) {
        this.setData({
          currentTitle: RefreshTitle.refreshing
        });
      }
    },

    canDoNothing(y) {
      return y >= this.data.INDICATOR_MAX_SIZE;
    },
    refreshingComplete() {
      this.setData({
        _refreshing: false,
        toView: refreshLine
      });
    }
  },
  ready() {
    scrollWxDom = wx.createSelectorQuery().in(this).select('#inScroll');
    scrollWxDom.scrollOffset().exec();
  }
})
