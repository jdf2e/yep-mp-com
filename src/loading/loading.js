// var WXBizDataCrypt = require('../../utils/WXBizDataCrypt')

//获取应用实例
var app = getApp();


Component({
  properties: {
      value: {
          type: String,
          value: '加载中'
      },
      type:{
          type: String,
          value: 'circle'
      },
      size: {
          type: String,
          value: 'small'
      },
      scale:{
          type:Number,
          value:'1'
      },
      color:{
          type:String,
          value:'green'
      }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {

    }
  },
  methods: {
    // 这里是一个自定义方法
    onTap: function(){
      console.log('onTap');
    }
  },
});