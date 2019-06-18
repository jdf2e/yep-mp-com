const app = getApp();

Page({
  data: {
    isClipper:false,
    imgSrc:'http://img30.360buyimg.com/uba/jfs/t1/20289/7/9257/141109/5c7cd143E50bd8662/92572f3d53f4c39c.jpg', // 示例图片
    templatePath:'', // 裁剪后返回临时路径
  },
  onLoad: function () {
  },
  Imgclip: function () {
    if(this.data.templatePath == '') {
      this.setData({
        isClipper:true
      })
    }
  },
  clipConfirm: function(e) {
    console.log("裁剪后图片",e.detail.tempFilePath)
    this.setData({
      isClipper:false,
      templatePath: e.detail.tempFilePath
    })
  },
  clipConsole: function () {
  	this.setData({
  		isClipper:false
  	})
  }
})