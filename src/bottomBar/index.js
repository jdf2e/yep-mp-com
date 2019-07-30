Component({
  /**
   * 组件的属性列表
   */
  properties: {
    height: {
      type: Number,
      default: 0,
    },
    zIndex: {
      type: Number,
      default: 99
    },
    bgColor: {
      type: String,
      default: '#fff'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isIPhoneX: false
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  attached() {
    wx.getSystemInfo({
      success: res => {
        const modelmes = res.model
        if (modelmes.search('iPhone X') !== -1) {
          this.setData({
            isIPhoneX: true
          })
        }
      }
    })
  }
})
