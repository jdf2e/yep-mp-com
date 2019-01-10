Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    // 这里定义的属性，属性值可以在组件使用时指定
    // 拉到什么位置时，回到顶部按钮展示
    setScrollTop: {
      type: Number,
      value: 100
    },
    // 回到顶部按钮的宽
    width: {
      type: Number,
      value: 74
    },
    // 回到顶部按钮的高
    height: {
      type: Number,
      value: 74
    }
  },
  data: {
    // 这里是一些组件内部数据
    scrollTop: 0,
    isFloor: false
  },
  methods: {
    //这里是一个自定义方法
    scroll: function (e) {
      let isFloor;
      // 触发回到顶部按钮显示的条件
      if (e.detail.scrollTop > this.data.setScrollTop) {
        isFloor = true;
      } else {
        isFloor = false;
      }
      this.setData({
        isFloor: isFloor
      });
    },
    goTop: function () {
      this.setData({
        scrollTop: 0
      });
    }
  }
})
