
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    line: {
      type: Number,
      value: 1
    }
  },
  lifetimes: {
    ready(){
      let line = this.data.line <= 1 ? 1: this.data.line;
      this.setData({
        line_number:line > 1 ?'mult_line':'single_line'
      })
    }
  },
  /**
   * 组件的内部数据
   */
  data: {
  },
  /**
   * 组件的方法列表
   */
  methods: {
  }
})
