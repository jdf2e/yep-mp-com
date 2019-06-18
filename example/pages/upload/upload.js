//获取应用实例
var app = getApp();
Page({
  data: {},
  onLoad: function() {},
  /**
   * 添加图片回调函数
   * @param {*} e
   */
  addImg(e) {
    console.log('addImg', e.detail.tempFilePath);
  },
  /**
   * 删除图片回调函数
   * @param {*} e
   */
  deleteImg(e) {
    console.log('deleteImg', e.detail.index);
  }
});
