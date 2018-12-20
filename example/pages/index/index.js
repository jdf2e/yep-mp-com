//案例首页
const app = getApp()
Page({
  data: {
    motto: 'Hello World to yourself',
    userInfo: {}
  },

  // 事件处理函数

  gotoAPIDemos() {
    console.log('gotoAPIDemos')
    wx.navigateTo({
      url: '../demos_api/demos_api'
    })
  },

  gotoUIDemos() {
    wx.navigateTo({
      url: '../demos_ui/demos_ui'
    })
  },

  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad() {
    console.log('onLoad')
    const that = this
    // 调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      // 更新数据
      that.setData({
        userInfo
      })
    })
  }
})
