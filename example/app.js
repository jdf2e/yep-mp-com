App({
  onLaunch(options) {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("logs", logs);
  },

  onShow(options) {
    console.log("app onShow", options);
    this.globalData.shareTicket = options.shareTicket;
  },

  getUserInfo(cb) {
    const that = this;
    if (this.globalData.userInfo) {
      typeof cb === "function" && cb(this.globalData.userInfo);
    } else {
      // 调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success(res) {
          that.globalData.userInfo = res.userInfo;
          typeof cb === "function" && cb(that.globalData.userInfo);
        }
      });
    }
  },

  globalData: {
    userInfo: null,
    shareTicket: ""
  }
});
