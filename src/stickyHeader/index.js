Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    height: 0,
    pos: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  ready() {
    wx.createSelectorQuery().in(this).select('#_stickheader').boundingClientRect(rect => {
      if (!rect) return
      this.setData({
        height: rect.height
      })
      // 初始stickyheader就处于顶部
      if (rect.top <= 0) {
        this.setData({
          pos: 'sticky'
        })
      }
      // 监听sticky框和视窗的相交事件
      this.createIntersectionObserver().relativeToViewport().observe('#_observer', res => {
        if (res) {
          if (res.intersectionRect.bottom <= 0 && res.boundingClientRect.bottom <= 0) {
            this.setData({
              pos: 'sticky'
            })
          } else {
            this.setData({
              pos: ''
            })
          }
        }
      })
    })
      .exec()
  }
})
