const app = getApp();

Component({
  properties: {
    text: {
      type: String,
      value: ''
    }
  },
  data: {
    sysW: wx.getSystemInfoSync().windowWidth * 0.133, // 每个格子的宽度
    year: 0,
    month: 0,
    currDay: 0,
    firstDay: 0, // 该月第一天是周几
    weekArr: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    dateArr: []
  },
  attached() {
    this.initDate();
  },
  methods: {
    initDate: function() {
      let date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        currDay = date.getDate();
      this.setData({
        year,
        month,
        currDay
      });
      this.dataTime();
    },
    /**
     * 获取日历信息
     */
    dataTime: function() {
      let firstDay = new Date(this.data.year, this.data.month - 1, 1).getDay();
      this.setData({
        firstDay
      });
      let nextMonth = new Date(this.data.year, this.data.month, 1);
      nextMonth.setDate(0);
      let lastDay = nextMonth.getDate();
      this.dealCalendar(lastDay);
    },
    /**
     * 渲染日历
     */
    dealCalendar: function(lastDay) {
      this.setData({
        dateArr: []
      });
      let arr = [];
      for (let i = 0; i < lastDay; i++) {
        arr.push({
          index: i + 1,
          icon: false
        });
      }
      this.setData({
        dateArr: arr
      });
    },
    /**
     * 切换月份
     */
    monthAdd: function() {
      if (this.data.month > 11) {
        this.setData({
          month: 1,
          year: this.data.year + 1
        });
      } else {
        this.setData({
          month: this.data.month + 1
        });
      }
      //切换时 默认高亮1号
      if (this.data.month !== new Date().getMonth() + 1) {
        this.setData({
          currDay: 1
        });
      }
      this.dataTime();
    },
    monthReduce: function() {
      if (this.data.month < 2) {
        this.setData({
          month: 12,
          year: this.data.year - 1
        });
      } else {
        this.setData({
          month: this.data.month - 1
        });
      }
      if (this.data.month !== new Date().getMonth() + 1) {
        this.setData({
          currDay: 1
        });
      }
      this.dataTime();
    },
    /**
     * 日期选择
     */
    dateChoose: function(e) {
      let index = e.currentTarget.dataset.index + 1;
      this.setData({
        currDay: index
      });
      this.triggerEvent('dateConfirm', {
        currDate: `${this.data.year}-${this.data.month}-${index}`
      });
    }
  }
});
