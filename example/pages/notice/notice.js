// let timer= null;
Page({
  data: {
    animationData: {}
  },
  onShow() {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    });
    animation.scale(2,2).rotate(45).step();
    this.setData({
      animationData:animation.export()
    })
  },
  closeNotice: function (e) {
    console.log('closeNotice', e);
  }
})