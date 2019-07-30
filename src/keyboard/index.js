
// 获取应用实例
const app = getApp()

Component({
  properties: {
    argument: {
      type: Object,
      value: {}
    }
  },
  data: {
    pricefocus: true,
    keyCode: [
      ['1', '2', '3'],
      ['4', '5', '6'],
      ['7', '8', '9'],
      ['.', '0', ''],
    ],
    // 这里是一些组件内部数据
    Odata: {
      priceFixFlag: false, // 小键盘是否展开收起
      keyBoardTitle: '', // 键盘弹窗标题
      inputTitle: '', // 输入框标题
      dealPayFeeShipping: ''// 输入框内容，Number类型
    }
  },
  methods: {
    // 这里是一个自定义方法
    // 点击数字
    keybordEventNum(e) {
      // 获取新商品价格
      // 获取新运费价格
      let newFeeShipping = this.properties.argument.dealPayFeeShipping + '' + e.currentTarget.dataset.keybord
      // 运费
      if (/^0(\d+)$/.test(newFeeShipping)) {
        // 禁止录入首位为0的整数部分两位以上
        newFeeShipping = newFeeShipping.replace(new RegExp('^0(\\d+)$'), '$1')
      } else if (/^\./.test(newFeeShipping)) {
        // 禁止录入首位为.的数字
        newFeeShipping = newFeeShipping.replace(new RegExp('^\\.'), '$1')
      } else if (newFeeShipping.split('.').length < 3 && newFeeShipping.length < 16) {
        // 更新价格
        this.setData({
          'Odata.dealPayFeeShipping': newFeeShipping
        })
      } else {

      }
    },
    // 删除操作
    keybordEventDele(e) {
      // 删掉最后一个数字的运费价格
      const newFeeShipping = this.properties.argument.dealPayFeeShipping.slice(0, this.properties.argument.dealPayFeeShipping.length - 1)
      // 给当前光标的内容更新
      this.setData({
        'Odata.dealPayFeeShipping': newFeeShipping
      })
    },
    // 点击确定之后
    keybordEventSumb() {
      this.properties.argument.submit()
    },
    // 隐藏小键盘
    keybordEventHide(e) {
      const that = this
      that.setData({
        'Odata.priceFixFlag': false
      })
    },
  },
  ready() {
    this.setData({Odata: this.properties.argument})
  }
})
