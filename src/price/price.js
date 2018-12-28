/* author: tongen@jd.com wechat:hanyuxinting
 * created date: 20180522
 * updated date: 20180523
 */

//获取应用实例
var app = getApp();

/* price type:
 * normal/sub/del
 * 当type为txt时，不关心iconType和iconImage，展示无图标toast。默认type为up。
 * iconImage 为用户自定义图片。如果有iconImage，则优先iconImage；否则根据iconType展示。
 * duration: 自定义关闭时间
 *
 */
Component({
  externalClasses: ['yepc-price', 'yepc-price-symbol', 'yepc-price-value', 'yepc-price-decimal'],//拓展样式
  properties: {
    type: {
      type: String,
      value: 'normal'
    },
    // 金币符号：人民币或者其他货币符号，默认为空，为人民币符号￥
    // 为￥时，也为人民币符号
    symbol: {
      type: String,
      value: '￥'
    },
    // 金币符号的位置，左下为sub，左上为sup，正常为normal，默认为左下；空时为默认左下。
    // 左下和左上都会变下
    symPos: {
      type: String,
      value: 'sub'
    },
    value: {
      type: String,
      value: '',
      observer: function (newVal) {
        this._resetValue(newVal, this.data.decimal);
      }
    },
    // del 为删除状态
    status: {
      type: String,
      value: '',
      observer: function (newVal) {
        // 状态为del时，增加className=del
        this.setData({
          _cls: newVal
        });
      }
    },
    // 小数部分展示的位数，默认为2;
    // 0：不展示；1：展示1位；2：展示2位；
    decimal: {
      type: Number,
      value: 2,
      observer: function (newVal) {
        // 对当前value的值重置
        this._resetValue(this.data.value, newVal);
      }
    },
    // 小数部分展示的位置，默认是右下：sub; 右上为sup；正常为normal
    decPos: {
      type: String,
      value: 'sub'
    }
  },
  data: {
    // 这里是一些组件内部数据
    // someData: {}
    // price className
    _cls: '',
    _intVal: '',
    _floatVal: ''
  },
  // created: function (options) {
  //   // console.log('price created', this.data.type, options);
  // },
  attached: function (options) {
    if(this.data.iconImage) {
      this.setData({
        iconType: ''
      });
    }
  },
  methods: {
    // 这里是一个自定义方法
    _resetValue: function (value, decimal) {
      // 判断value的第一位是否是非数字，即货币符号
      let symbol = '￥';
      if(!/^[0-9]*$/.test(value.substring(0, 1))){
        symbol = value.substring(0, 1);
        value = value.substring(1);
      }
      if(decimal == 0) {
        value = parseInt(value);
      } else {
        value = parseFloat(value).toFixed(decimal);
      }
      let vals = (value + '') .split('.');
      this.setData({
        _symbol: symbol,
        _intVal: vals[0],
        _floatVal: vals[1] || null
      });
    },
    onTap: function(){
      // console.log('onTap');
      let myEventDetail = {}; // detail对象，提供给事件监听函数
      let myEventOption = {}; // 触发事件的选项
      this.triggerEvent('btnEvent', myEventDetail, myEventOption);
    }
  }
});