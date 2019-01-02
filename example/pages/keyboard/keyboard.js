// pages/keyboard/keyboard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      argument:{
          priceFixFlag:true,//小键盘是否展开收起
          keyBoardTitle: "键盘弹窗标题",
          inputTitle:"输入框标题",
          dealPayFeeShipping: "5.00", //输入框内容，Number类型
          submit:function(){
              console.log("确定回调函数")
          },
      }
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
      this.yepKeyboard = this.selectComponent("#keyboard");
      //that.yepKeyboard.keybordEventHide(); //关闭弹层
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      setTimeout(function(){
          console.log("ssss")
      },5000)
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