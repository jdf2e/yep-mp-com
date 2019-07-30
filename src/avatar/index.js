
Component({
  externalClasses: ['yepc-avatar', 'yepc-avatar-msg'], // 拓展样式
  properties: {
    shape: {
      type: String,
      value: 'circle' // circle,square
    },
    size: {
      type: String,
      Number,
      value: '',
      observer(newVal, oldVal) {
        if (newVal.indexOf('rpx') != -1) {
          this.setData({
            _size: newVal
          })
        } else {
          this.setData({
            _size: parseInt(newVal) * 2 + 'rpx'
          })
        }
      }
    },
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
          this.setData({
            _msgCls: 'rec',
            _count: (parseInt(newVal) > 99 ? '99+' : parseInt(newVal))
          })
        }
      }
    },
    src: {
      type: String,
      value: ''
    },
    max: {
      type: Number,
      value: 99
    }
  },
  data: {
    _msgCls: 'circle',
    _count: '',
    _size: ''
  },
  attached() {
    if (this.data.count > this.data.max) {
      this.setData({
        count: this.data.max + '+'
      })
    }
  },
  methods: {
  }
})
