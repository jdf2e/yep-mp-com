Component({
  properties: {
    right: {
      type: Array,
      value: []
    },
    left: {
      type: Array,
      value: []
    }
  },

  data: {
    mainStyle: ''
  },

  ready() {
    const that = this
    // selectorQuery.in(component)
    // 将选择器的选取范围更改为自定义组件component内。（初始时，选择器仅选取页面范围的节点，不会选取任何自定义组件中的节点。）
    wx.createSelectorQuery().in(this).select('.btn-list-right').boundingClientRect(function (res) {
      that.setData({
        rightWidth: res ? res.width : 0
      })
    })
      .exec()

    wx.createSelectorQuery().in(this).select('.btn-list-left').boundingClientRect(function (res) {
      that.setData({
        leftWidth: res ? res.width : 0
      })
    })
      .exec()
  },

  methods: {
    onTap(e) {
      const btnEvent = e.currentTarget.dataset.btnevent
      const autoClose = e.currentTarget.dataset.autoclose
      if (btnEvent) {
        const myEventDetail = {} // detail对象，提供给事件监听函数
        const myEventOption = {} // 触发事件的选项
        this.triggerEvent(btnEvent, myEventDetail, myEventOption)
      }
      if (autoClose) {
        // 点击按钮后自动隐藏按钮
        this.setData({
          mainStyle: 'left: 0px; right: 0px;'
        })
      }
    },

    _touchS(e) {
      if (e.touches.length == 1) {
        this.setData({
          // 设置触摸起始点水平方向位置
          startX: e.touches[0].clientX
        })
      }
    },

    _touchM(e) {
      if (e.touches.length == 1) { // 1个手指触摸
        // 手指移动时水平方向位置
        const moveX = e.touches[0].clientX
        // 手指起始点位置与移动期间的差值
        const disX = this.data.startX - moveX
        const rightWidth = this.data.rightWidth
        const leftWidth = this.data.leftWidth
        let txtStyle = ''

        if (disX > 0) {
          // 左滑
          if (this.data.right && this.data.right.length) {
            // 右侧有按钮
            txtStyle = 'left: -' + disX + 'px'
            if (disX >= rightWidth) {
              // 控制手指移动距离最大值为按钮的宽度
              txtStyle = 'left: -' + rightWidth + 'px'
            }
          } else {
            // 右侧无按钮
            // 如果移动距离大于等于0（左滑），文本层位置不变
            txtStyle = 'right: 0px'
          }
        } else {
          // 右滑
          if (this.data.left && this.data.left.length) {
            // 左侧有按钮
            txtStyle = 'right: ' + disX + 'px'
            if (disX <= -leftWidth) {
              // 控制手指移动距离最大值为按钮的宽度
              txtStyle = 'right: -' + leftWidth + 'px'
            }
          } else {
            // 左侧无按钮
            // 如果移动距离小于等于0（右滑），文本层位置不变
            txtStyle = 'left: 0px'
          }
        }

        this.setData({
          mainStyle: txtStyle
        })
      }
    },

    _touchE(e) {
      if (e.changedTouches.length == 1) {
        // 手指移动结束后水平位置
        const endX = e.changedTouches[0].clientX
        // 触摸开始与结束，手指移动的距离
        const disX = this.data.startX - endX
        const rightWidth = this.data.rightWidth
        const leftWidth = this.data.leftWidth

        // 如果距离小于删除按钮的1/2，不显示删除按钮
        let txtStyle = ''
        if (disX > 0) {
          // 左滑
          txtStyle = disX > rightWidth / 2 ? 'left: -' + rightWidth + 'px' : 'left: 0px'
        } else {
          // 右滑
          txtStyle = disX < -leftWidth / 2 ? 'right: -' + leftWidth + 'px' : 'right: 0px'
        }
        this.setData({
          mainStyle: txtStyle
        })
      }
    }
  }
})
