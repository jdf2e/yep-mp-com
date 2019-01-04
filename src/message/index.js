
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //信息级别：info（普通）,err（错误）,suc（成功）,warn（警告）
    level:{
      type:String,
      value:'info'
    },
    info:{
      type:String,
      value:''
    },
    time:{
      type:Number,
      value:1500
    }
  },
  lifetimes: {
    ready(){
      this.animation = wx.createAnimation({
        duration: 600,
        timingFunction: 'ease',
      })
    }
  },
  /**
   * 组件的内部数据
   */
  data: {
    bgColors:{
      info:"#2d8cf0",
      err:"#ed3f14",
      suc:"#1abe6d",
      warn:"#ff9900"
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 开始动画
     */
    startAnimation:function(){
        this.animation.height('60rpx').step();
        this.setData({
          msg:this.data.info,
          animationData: this.animation.export()
        })
    },
    /**
     * 结束动画
     */
    endAnimation:function(){
      this.animation.height('0rpx').step();
      this.setData({
        msg:'',
        animationData: this.animation.export()
      })
    },
    /**
     * 展示信息
     */
    showMsg:function(){
      let _this = this;
      this.startAnimation();
      setTimeout(()=>{
        _this.endAnimation();
      },_this.data.time);
    }
  }
})
