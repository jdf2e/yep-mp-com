
// 关于我们页面
const app = getApp()
Page({
  data: {
    motto: 'Hello World to yourself',
    userInfo: {}
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
