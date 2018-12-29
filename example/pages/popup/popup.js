// pages/dialog/dialog.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    boxType: 'input'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },
  /**
   * 展示pop
   */
  showPop:function(e){
    let type = e.target.dataset.type;
    switch(type){
      case 'center':
        this.selectComponent("#center").togglePop();
        break;
      case 'top':
        this.selectComponent("#top").togglePop();
        break;
      case 'bottom':
        this.selectComponent("#bottom").togglePop();
        break;
      case 'right':
        this.selectComponent("#right").togglePop();
        break;
    }
  }
})
