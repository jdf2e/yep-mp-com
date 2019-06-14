// pages/keyboard/keyboard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputData1: {
        input_value: "", //输入框的初始内容
        value_length: 0, //输入框密码位数
        isNext: true, //是否有下一步的按钮，有的话输入完成后不清空内容
        get_focus: true, //输入框的聚焦状态
        focus_class: false, //输入框聚焦样式
        value_num: [1, 2, 3, 4, 5, 6], //输入框格子数
        height: "76rpx", //输入框高度
        width: "604rpx", //输入框宽度
        see: false, //是否明文展示
        hasGap: false//是否显示间隔格子,
    },
    inputData2: {
        input_value: "", //输入框的初始内容
        value_length: 0, //输入框密码位数
        isNext: true, //是否有下一步的按钮
        get_focus: false, //输入框的聚焦状态
        focus_class: false, //输入框聚焦样式
        value_num: [1, 2, 3, 4], //输入框格子数
        height: "76rpx", //输入框高度
        width: "650rpx", //输入框宽度
        see: true, //是否明文展示
        hasGap: false//是否显示间隔格子,
    }
  },
  //输入完成回调
  complete: function(p) {
      //p 为回调函数携带参数，p.detail是输入的密码值
      wx.showToast({
          title: p.detail,
          duration: 2000
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})