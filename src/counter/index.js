Component({

  /**
   * 组件的属性列表
   */
  properties: {
    //最小值（计数值不得小于该值）
    min:{
      type:Number,
      value:0
    },
    //最大值（计数值不得大于该值）
    max:{
      type:Number,
      value:10000
    },
    //步幅
    step:{
      type:Number,
      value:1
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    valiable:{
      add:true,
      sub:true
    }
  },
  lifetimes: {
    ready(){
      let {min,max,step} = this.data;
      if(min > max){
        console.log('max值要比min大哦');
      }
      this.setData({
        curNum:min+step
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 执行计算
     */
    doCount:function(e){
      let type = e.currentTarget.dataset.type;
      let {curNum,min,max,step} = this.data;
      if(type == 'add'){//加操作
        if(curNum < max){
          if((curNum + step) >= max){
            this.setData({
              ['valiable.add']:false
            })            
          }
          this.setData({
            curNum:curNum + step > max ?curNum : curNum + step,
            ['valiable.sub']:true
          })
        }
      }else if(type == 'sub'){//减操作
        if(curNum > min){
          if((curNum-step) <= min){
            this.setData({
              ['valiable.sub']:false
            })
          }
          this.setData({
            curNum:curNum-step < min ?curNum : curNum-step,
            ['valiable.add']:true
          })
        }
      }
    },
    /**
     * 获取当前计数值
     */
    getCurVal:function(){
      return this.data.curNum;
    }
  }
})
