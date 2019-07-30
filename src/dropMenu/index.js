Component({
  properties: {
    labelTxt: {
      type: String,
      value: '分类：'
    },
    isDropMenu: {
      type: Boolean,
      value: false
    },
    dropMenuData: {
      type: Array,
      value: [{val: '我是选择1', isSel: false}, {val: '我是选择2', isSel: false}, {val: '我是选择3', isSel: false}]
    },
    selVal: {
      type: String,
      value: '请选择类型'
    },
    curIndex: {
      type: Number,
      value: ''
    },
    icon: {
      type: String,
      value: 'http://img20.360buyimg.com/uba/jfs/t20959/196/687084072/15587/b595f4fa/5b14e462N1b76c89a.png'
    }
  },
  methods: {
    select(e) {
      const selValue = e.currentTarget.dataset.item.val
      const curIndex = e.currentTarget.dataset.index
      this.setData({
        selVal: selValue,
        curIndex,
        isDropMenu: false
      })
    },
    isDropMenuShow() {
      this.setData({
        isDropMenu: !this.data.isDropMenu
      })
    }
  }
})
