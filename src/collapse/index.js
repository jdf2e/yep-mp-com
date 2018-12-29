Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{//折叠部分标题
      type:String,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isOpen:false,//是否展开
  },
  lifetimes: {
    ready(){
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 获取当前的状态
     */
    toggleInfo:function(){
      this.setData({
        isOpen:!this.data.isOpen
      })
     
      //this.setData({animation: this.animation.export()})
    },
    /**
     * 获取当前的状态
     */
    getStatus:function(){
      return this.data.isOpen
    },
    /**
     * 关闭折叠层
     */
    closeInfo:function(){
      this.setData({
        isOpen:false
      })
    },
    /**
     * 打开折叠层
     */
    openInfo:function(){
      this.setData({
        isOpen:true
      })
    }
  }
})
