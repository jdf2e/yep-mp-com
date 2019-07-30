/* author: tongen@jd.com wechat:hanyuxinting
 * created date: 20180522
 * updated date: 20180523
 */

Component({
  externalClasses: ['yepc-notice', 'yepc-notice-icon-wrap', 'yepc-notice-icon', 'yepc-notice-content-wrap', 'yepc-notice-close'], // 拓展样式
  properties: {
    // content: {
    //   type: String,
    //   value: "默认content",
    //   observer: function (newVal) {
    //     console.log('type newVal: ', newVal);
    //     this.setContentLength();
    //   }
    // },
    icon: {
      type: String,
      value: ''
    },
    closable: {
      type: Boolean,
      value: false,
      observer(newVal) {
        console.log('closable', newVal)
        this.setData({
          _isClosable: true
        })
      }
    },
    loop: {
      type: Boolean,
      value: false
    },
    speed: {
      type: Number,
      value: 10
    },
    direction: {
      type: String,
      value: ''
    }
  },
  data: {
    _isShow: true,
    _isClosable: false,
    _width: 0
  },
  created(options) {
  },
  ready() {
    if (this.data.loop) {
      this.init()
    }
  },
  methods: {
    onTap() {
      const myEventDetail = {} // detail对象，提供给事件监听函数
      const myEventOption = {bubbles: true, composed: true} // 触发事件的选项
      this.triggerEvent('noticechange', myEventDetail, myEventOption)
      this.close()
    },

    init() {
      wx.createSelectorQuery().in(this).select('.yep-notice-content-wrap').boundingClientRect((wrapRect) => {
        wx.createSelectorQuery().in(this).select('.yep-notice-content').boundingClientRect((contRect) => {
          // wx.createSelectorQuery().in(this).selectAll().boundingClientRect((rects) => {
          //   console.log('contrect', contRect, wrapRect, rects);
          this.setData({
            wrapWidth: wrapRect.width,
            width: contRect.width,
            _width: wrapRect.width * 100 / 375
          })
          // }).exec();
        })
          .exec()
      })
        .exec()
    },

    setContentLength() {
      const str = this.data.content

      function getWidth(str) {
        return [].reduce.call(str, (count, curr, i) => {
          if (str.charCodeAt(i) > 255) {
            count += 2
          } else {
            count += 1
          }
          console.log('str222', count)
          return count
        }, 0)
      }

      const count = getWidth(str)
      console.log('str', getWidth(str), parseInt(count))
      this.setData({
        _width: parseInt(count) * 12 * 100 / 375
      })

      console.log('_width', this.data._width)
    },

    close() {
      this.setData({
        _isShow: false
      })
    }
  }
})
