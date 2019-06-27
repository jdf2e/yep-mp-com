// components/progress/progress.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    percent: {
      type: Number,
      value: 0
    },
    // normal || active || wrong || success
    status: {
      type: String,
      value: 'normal'
    },
    strokeWidth: {
      type: Number,
      value: 10
    },
    hideInfo: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
