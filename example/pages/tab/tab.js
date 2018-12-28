// var WXBizDataCrypt = require('../../utils/WXBizDataCrypt')


Page({
  data: {
    tabMessage: {
      type: 'message',
      tabs: [{
        name: '物流',
        count: '100',
        icon: '',
        tabContent: '物流1'
      },{
        name: '通知',
        count: '100',
        icon: '',
        tabContent: '物1'
      },{
        name: '互动互动',
        count: '100',
        icon: '',
        tabContent: '物流2221'
      },{
        name: '订订阅阅',
        count: '100',
        icon: '',
        tabContent: '物流2332323231'
      },{
        name: '互动互动',
        count: '10',
        icon: '',
        tabContent: '物流1232323'
      }],
      currIdx: 0
    },
    tabText: {
      type: 'text',
      tabs: [{
        name: '精选',
        count: '',
        icon: '',
        tabContent: '物流1'
      },{
        name: '图书文娱',
        count: '100',
        icon: '',
        tabContent: '物1'
      },{
        name: '服饰内衣',
        count: '100',
        icon: '',
        tabContent: '物流2221'
      },{
        name: '母婴玩具',
        count: '100',
        icon: '',
        tabContent: '物流2332323231'
      },{
        name: '家具',
        count: '10',
        icon: '',
        tabContent: '物流1232323'
      },{
        name: '服饰内衣',
        count: '100',
        icon: '',
        tabContent: '物流2221'
      },{
        name: '母婴玩具',
        count: '100',
        icon: '',
        tabContent: '物流2332323231'
      },{
        name: '家具',
        count: '10',
        icon: '',
        tabContent: '物流1232323'
      }],
      currIdx: 0
    }
  },

  selectMessageTab: function (e) {
    console.log('selectTab', e);
    // 获取从组件过来的数据
    let me = this;
    // console.log('e.currentTarget.dataset.idx', e.currentTarget.dataset.idx, me.data.tabs[e.currentTarget.dataset.idx]);
    let currIdx = e.detail.key;

    console.log('currIdx', currIdx);
    let txt = 'tabMessage.currIdx';

    this.setData({
      [txt]: e.detail.key
    });
  },

  selectTextTab: function (e) {
    console.log('selectTab', e);
    // 获取从组件过来的数据
    let me = this;
    // console.log('e.currentTarget.dataset.idx', e.currentTarget.dataset.idx, me.data.tabs[e.currentTarget.dataset.idx]);
    let currIdx = e.detail.key;

    console.log('currIdx', currIdx);
    let txt = 'tabText.currIdx';

    this.setData({
      [txt]: e.detail.key
    });
  }
});