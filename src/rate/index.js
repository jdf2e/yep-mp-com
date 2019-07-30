Component({
  /* 通用属性
      星星样式：types : 1/2/3
      个数: count
      尺寸：size
      描述文字：descArr
      文字颜色：descColor
      动画：animate
      初始分值：value

     样式1 特有属性：
      选中颜色：color
      背景色 :bgColor
      渐变色数组 :colorArr
  */
  properties: {
    types: { // 样式
      type: Number,
      value: 1,
    },
    count: { // 个数
      type: Number,
      value: 5
    },
    size: { // 尺寸
      type: Number,
      value: null,
      observer(newVal, oldVal) {
        console.log('observer', newVal, oldVal)
        const me = this
        if (newVal != null) {
          if (me.data.types == '2' || me.data.types == '3') {
            me.setData({
              freeStyle: `width:${me.data.size}rpx;height:${me.data.size}rpx;
              background-size:${me.data.size}rpx ${me.data.size}rpx`
            })
          } else {
            me.setData({
              freeStyle: `font-size:${me.data.size}rpx;`
            })
          }
        }
      }
    },
    descArr: { // 描述数组
      type: Array,
      value: [],
    },
    descColor: {
      type: String,
      value: '#000'
    },
    animate: { // 动画
      type: String,
      value: ''
    },
    value: { // 初始分值
      type: Number,
      value: 2
    },

    // 样式1 属性
    color: { // 选中色
      type: String,
      value: ''
    }, // 渐变色数组
    colorArr: {
      type: Array,
      value: [],
    },
    bgColor: { // 背景色
      type: String,
      value: '#e5e5e5'
    },

    // 自定义图片 属性
    // imgUrl:{
    //   type:String,
    //   value:''
    // },
    // imgSize:{
    //   type:String,
    //   value:'84rpx 84rpx'
    // },
    // imgPosition:{
    //   type:String,
    //   value:'0 0'
    // },

  },
  data: {
    index: 0,
    freeStyle: '',
    currType: ''
  },

  methods: {
    yep_rate_click(e) {
      this.setData({
        value: e.currentTarget.dataset.id
      })
      this.triggerEvent('rateChange', this.data.value)
    }
  }
})
