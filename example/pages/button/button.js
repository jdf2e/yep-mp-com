// var WXBizDataCrypt = require('../../utils/WXBizDataCrypt')

//获取应用实例
var app = getApp();
Page({
  data: {

  },
  onMyEvent: function (e) {
    console.log('butten onMyEvent', e);
  },
  onGotUserInfo: function (e) {
    console.log('onGotUserInfo', e);
  },
  onGetPhoneNum: function (e) {
    console.log('onGetPhoneNum', e);
  },
  onLaunchApp: function (e) {
    console.log('onLaunchApp', e);
  },
  onOpenSetting: function (e) {
    console.log('onOpenSetting', e);
  }
});