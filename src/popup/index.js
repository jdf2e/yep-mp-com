// components/drag.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type: {// 页面类型，值为center（居中），top(上方出现)，bottom（底部出现），right（右侧出现）
      type: 'String',
      value: 'center'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShowPop: false, // 是否展示pop
    typeClass: {
      center: 'pos-center-show',
      top: 'pos-top-show',
      bottom: 'pos-bottom-show',
      right: 'pos-right-show'
    },
    isShow: false
  },
  lifetimes: {
    ready() {

    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 展示或隐藏 popUp 弹框
     */
    togglePop() {
      if (this.data.isShowPop) { // 关闭
        this.setData({
          isShow: false
        })
        setTimeout(() => {
          this.setData({
            isShowPop: false
          })
        }, 500)
      } else {
        this.setData({
          isShowPop: true
        })
        setTimeout(() => {
          this.setData({
            isShow: true,
          })
        }, 10)
      }
    },
  }
})
