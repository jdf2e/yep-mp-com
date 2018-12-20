// pages/dialog/dialog.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    boxType: 'input'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },
  /**
   * 展示弹框
   */
  toggleDialog(e) {
    const id = '#dialogBox' + e.target.dataset.index
    this.dialogBox = this.selectComponent(id)
    this.dialogBox.toggle(false)
  },
  // 确认事件
  _dialogConfirm() {
    console.info('_dialogConfirm event trggle')
    this.dialogBox.toggle(true)
  },
  // 取消事件
  _dialogCancel() {
    console.info('_dialogConfirm event trggle')
  }
})
