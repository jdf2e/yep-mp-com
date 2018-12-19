
Component({
  externalClasses: ['box-bottom', 'singleBtn'], // 拓展样式
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    btnType: {// 设置按钮类型: 0:无底部按钮 1：底部单按钮 2:底部双按钮
      type: Number,
      value: 2
    },
    firstBtn: {
      type: String,
      value: '取消'
    },
    secondBtn: {
      type: String,
      value: '确定'
    },
    isSpecialBtn: {// 是否定制化底部按钮样式,如果该值为true时，需要填充按钮插槽中内容
      type: Boolean,
      value: false
    },
  },
  /**
   * 组件的内部数据
   */
  data: {
    isClose: true, // 弹框默认开启
  },
  /**
   * 组件的方法列表
   */
  methods: {
    toggle() { // 开启、关闭弹框
      this.setData({
        isClose: !this.data.isClose
      })
      // console.log('this.data.isClose', this.data.isClose);
    },
    confirm() { // 确认按钮
      this.triggerEvent('dialogConfirm', {inputValue: this.data.inputValue}, {})
      // this.toggle();
    },
    cancel() { // 取消按钮
      this.triggerEvent('dialogCancel', {}, {})
      this.toggle(true)
    }
  }
})
