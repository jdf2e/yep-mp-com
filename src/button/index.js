// var WXBizDataCrypt = require('../../utils/WXBizDataCrypt')

// 获取应用实例
const app = getApp()

/* 按钮type:
 * normal\primary\disabled\ghost\small\large\
 * search\download\upload\backward\forward\loading\
 * addcart\addcarticon\easybuy\
 */
Component({
  // options: {
  //   multipleSlots: true // 在组件定义时的选项中启用多slot支持
  // },
  properties: {
    type: {
      type: String,
      value: 'easybuy'
    },
    size: {
      type: String,
      value: 'normal'
    },
    hoverclass: {
      type: String,
      value: 'hover-class'
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {
    // 这里是一个自定义方法
    onTap() {
      console.log('onTap')
      const myEventDetail = {} // detail对象，提供给事件监听函数
      const myEventOption = {} // 触发事件的选项
      this.triggerEvent('btnEvent', myEventDetail, myEventOption)
    }
  }
})
