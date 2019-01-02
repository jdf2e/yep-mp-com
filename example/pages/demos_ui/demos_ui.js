// var WXBizDataCrypt = require('../../utils/WXBizDataCrypt')

Page({
  data: {
    pageList: {
      showSwitch: '../switch/switch',
      showDrag:'../drag/drag',
      showPopup:'../popup/popup',
      showCounter:'../counter/counter',
      showDialog: '../dialog/dialog',
      showSwipeAction:'../swipeAction/swipeAction',
      showCollapse:'../collapse/collapse',

      showAvatar: '../avatar/avatar',
      showBadge: '../badge/badge',
      showBottomBar: '../bottomBar/bottomBar',
      showButton: '../button/button',
      showCountdown: '../countdown/countdown',
      showInfiniteScroll: '../infiniteScroll/infiniteScroll',
      showLoading: '../loading/loading',
      showNotice: '../notice/notice',
      showPrice: '../price/price',
      stickyHeader: '../stickyHeader/stickyHeader',
      showTab: '../tab/tab',
      showGoTop: '../goTop/goTop',

     
      showProgress: '../progress/progress',
      showSwiper: '../progress/progress',
      dropMenu: '../dropMenu/dropMenu',
      elevator: '../elevator/elevator',
      rate: '../rate/rate',
      swipeAction: '../swipeAction/swipeAction',
      showFlex: '../flex/flex',
      showFixed: '../fixed/fixed',
      loadmore: '../loadmore/loadmore',
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
