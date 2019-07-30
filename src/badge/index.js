
Component({
  // 组件的对外属性，是属性名到属性设置的映射表
  externalClasses: ['yepc-badge', 'yepc-badge-msg'], // 拓展样式
  properties: {
    count: {
      type: String,
      value: '',
      observer(newVal, oldVal) {
        if (newVal && parseInt(newVal) <= 0 || !newVal) {
          return
        }
        if (parseInt(newVal) < 10) {
          this.setData({
            _msgCls: 'circle',
            _count: parseInt(newVal)
          })
        } else {
          console.log((parseInt(newVal) > 99 ? '99+' : parseInt(newVal)))
          this.setData({
            _msgCls: 'rec',
            _count: (parseInt(newVal) > 99 ? '99+' : parseInt(newVal))
          })
        }
      }
    },
    dot: {
      type: Boolean,
      value: false,
      observer(newVal, oldVal) {
        if (newVal) {
          this.setData({
            _msgCls: 'dot'
          })
        } else {
          this.setData({
            _msgCls: ''
          })
        }
      }
    },
    text: {
      type: String,
      value: ''
    },
    alone: {
      type: Boolean,
      value: false,
      observer(newVal, oldVal) {
        if (newVal) {
          this.setData({
            _alone: 'alone'
          })
        } else {
          this.setData({
            _alone: ''
          })
        }
      }
    }
  },
  // 组件的内部数据，和 properties 一同用于组件的模版渲染
  data: {
    _msgCls: '',
    _count: '',
    _alone: ''
  },
  attached() {
  },
  methods: {
  }
})
