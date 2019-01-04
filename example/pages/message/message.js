// pages/dialog/dialog.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:{
      info:{
        info:'这是一条消息',
        level:'info',
        time:2000
      },
      err:{
        info:'这是一条错误消息',
        level:'err',
        time:2000
      },
      suc:{
        info:'这是一条成功消息',
        level:'suc',
        time:2000
      },
      warn:{
        info:'这是一条警告消息',
        level:'warn',
        time:2000
      },
      time:{
        info:'信息展示时间为 4 秒钟',
        level:'info',
        time:4000
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },
  /**
   * 展示meessage组件
   */  
  showMsg:function(e){
    let type = e.target.dataset.level;
    this.selectComponent("#"+type).showMsg();
  }
})
