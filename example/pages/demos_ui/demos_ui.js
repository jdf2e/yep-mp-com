// var WXBizDataCrypt = require('../../utils/WXBizDataCrypt')

Page({
  data: {
    pageList: {
      switch: '../switch/switch',
      drag:'../drag/drag',
      popup:'../popup/popup',
      counter:'../counter/counter',
      showModelDialog: '../dialog/dialog',
      swipeAction:'../swipeAction/swipeAction',


      showButton: '../button/button',
      showPrice: '../price/price',
      showNotice: '../notice/notice',
      countdown: '../countdown/countdown',
      showBadge: '../badge/badge',
      showAvatar: '../avatar/avatar',
      showLoading: '../loading/loading',
      showTab: '../tab/tab',
      showProgress: '../progress/progress',
      showSwiper: '../progress/progress',
      dropMenu: '../dropMenu/dropMenu',
      goTop: '../goTop/goTop',
      bottomBar: '../bottomBar/bottomBar',
      stickyHeader: '../stickyHeader/stickyHeader',
      elevator: '../elevator/elevator',
      rate: '../rate/rate',
      swipeAction: '../swipeAction/swipeAction',
      showFlex: '../flex/flex',
      showFixed: '../fixed/fixed',
      loadmore: '../loadmore/loadmore',
      infiniteScroll: '../infiniteScroll/infiniteScroll',
      list: '../list/list',
      showToast: '../toast/toast',
      showMask: '../mask/mask',
      showCoupon: '../coupon/coupon',
      search: '../searchbar/searchbar',
      keyboard: '../keyboard/keyboard',

    }
  },
  showPage(event) {
    const title = event.currentTarget.dataset.title
    wx.navigateTo({
      url: this.data.pageList[title]
    })
  }
})
