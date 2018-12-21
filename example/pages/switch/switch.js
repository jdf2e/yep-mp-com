// pages/switch/switch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  btnTap: function(){
    this.switch = this.selectComponent("#switchEnable")
    this.switch.toggle();
  },
  //绑定时间出发
  _statusChange:function(options){
    console.info('isClose',options.detail.isClose);
  }
})