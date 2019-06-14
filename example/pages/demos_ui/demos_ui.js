// var WXBizDataCrypt = require('../../utils/WXBizDataCrypt')

Page({
  data: {
    pageList: {
      showButton: '../button/button',
      showAvatar: '../avatar/avatar',
      showBadge: '../badge/badge',
      showPrice: '../price/price',
      showLoading: '../loading/loading',
      showNotice: '../notice/notice',
      showCountdown: '../countdown/countdown',
      showInfiniteScroll: '../infiniteScroll/infiniteScroll',
      showTab: '../tab/tab',
      showGoTop: '../goTop/goTop',
      showBottomBar: '../bottomBar/bottomBar',
      showStickyHeader: '../stickyHeader/stickyHeader',
      showElevator: '../elevator/elevator',
      showSwipeAction: '../swipeAction/swipeAction',
      showRate: '../rate/rate',
      showModelDialog: '../dialog/dialog',
      showPopup: '../popup/popup',
      showSwitch: '../switch/switch',
      showMask: '../mask/mask',
      showSwiper: '../swiper/swiper',
      showDrag: '../drag/drag',
      showCounter:'../counter/counter',
      showCollapse:'../collapse/collapse',
      showKeyboard: '../keyboard/keyboard',
      showSearch: '../searchbar/searchbar',
      showCoupon: '../coupon/coupon',
      showMessage:'../message/message',
      showCell:'../cell/cell',
      showDrapMenu:'../dropMenu/dropMenu',
      showElip:'../elip/elip',
      showPassword:'../password/password',
    }
  },
  showPage(event) {
    const title = event.currentTarget.dataset.title
    wx.navigateTo({
      url: this.data.pageList[title]
    })
  }
})
