const ratio = wx.getSystemInfoSync().windowWidth / 750;
Component({
  /**
   * 说明：
   * imgSrc： 需要裁剪的图片路径(movable-view 暂不支持本地路径)
   * 裁剪后图片为方图
   */
  properties: {
    imgSrc :{
      type: String,
      value: ''
    }
  },
  data:{
    x: 0,
    y: 0,
    scale: 1,
    windowWidth: wx.getSystemInfoSync().windowWidth,
    windowHeight: wx.getSystemInfoSync().windowHeight,

    cutW: wx.getSystemInfoSync().windowWidth  * 0.9, // 裁剪框 宽高
    cutH: wx.getSystemInfoSync().windowWidth * 0.9,

    imageSrc:'', // 选择的图片
    tempFilePaths:'', // 图片临时路径
    imageW: 0, // 图片原始宽高
    imageH: 0,

    cropperW: 0, // 可移动区域(图片)宽高
    cropperH: 0,
    cropperT: 0,

    moveImgLeft: 0, // 用户操作后，可移动区域位置
    moveImgTop:0
  },
  attached() {
    this.initImgInfo()
  },
  methods: {
    /**
     * 初始化图片信息
     */
    initImgInfo() {
      let imgSrc = this.data.imgSrc;
      this.setData({
        imageSrc: imgSrc
      })
      let _this = this;
      wx.showLoading({
        title: '加载中',
        mask: true
      })
      wx.getImageInfo({
        src:imgSrc,
        success(res) {
          wx.hideLoading();
          _this.setData({
            imageW: res.width,
            imageH: res.height,
            tempFilePaths:res.path
          })
          let innerAspectRadio = res.width / res.height;
          if (innerAspectRadio > 1) {
            _this.setData({
              cropperW: _this.data.windowWidth * innerAspectRadio,
              cropperH: _this.data.windowWidth,
              cropperT: (_this.data.windowHeight * 0.92 - _this.data.windowWidth) / 2,
            })
          } else {
            _this.setData({
              cropperW: _this.data.windowWidth,
              cropperH: _this.data.windowWidth / innerAspectRadio,
              cropperT: (_this.data.windowHeight * 0.92 - _this.data.windowWidth / innerAspectRadio) / 2,
            })
          }
        },
        fail(err) {
          wx.showToast({
            title: '获取图片信息失败',
            icon: 'none',
            duration: 1000
          })
          setTimeout(() => {
            _this.clipConsole();
          },1000)
          console.error("getImageInfo-err",err)
        }
      })
    },
    /**
     * 移动
     */
    onChange(e) {
      this.setData({
        moveImgLeft:e.detail.x,
        moveImgTop:e.detail.y
      })
    },
    /**
     * 缩放
     */
    onScale(e) {
      this.setData({
        scale: e.detail.scale,
        moveImgLeft:e.detail.x,
        moveImgTop:e.detail.y
      })
    },
    /**
     * 确认裁剪
     */
    clipConfirm() {
      wx.showLoading({
        title: '裁剪中',
        mask: true
      })
      const ctx = wx.createCanvasContext('myCanvas',this);
      let canvasW = this.data.cutW,
          canvasH = this.data.cutH;
      let scaleW = this.data.imageW / (this.data.cropperW * this.data.scale), // 图片原始大小压缩比
          scaleH = this.data.imageH / (this.data.cropperH * this.data.scale);
      let sx = (this.data.windowWidth - canvasW) / 2 - this.data.moveImgLeft, // 选择框 距图像左上角 x 坐标
          sy = (this.data.windowHeight * 0.92 - canvasH) / 2 - this.data.moveImgTop; // 选择框 距图像左上角 y 坐标
      /**
       * 绘图API : 
       * drawImage(imageResource, sx, sy, sWidth, sHeight, dx, dy, dWidth,dHeight)
       * imageResource 是原始图片(真实尺寸) 
       */
      ctx.drawImage(this.data.tempFilePaths, sx * scaleW, sy * scaleH, canvasW * scaleW , canvasH * scaleH, 0, 0, canvasW, canvasH);
      ctx.draw(false, () => {
        wx.hideLoading();
        console.log("this.data",this.data)
        wx.canvasToTempFilePath({
          x: 0,
          y: 0,
          width: canvasW,
          height: canvasH,
          destWidth: canvasW,
          destHeight: canvasH,
          canvasId: 'myCanvas',
          success: (res) => {
            this.triggerEvent('clipConfirm',{'tempFilePath':res.tempFilePath});
            // console.log('canvasToTempFilePath',res.tempFilePath)
          },
          fail: (error) => {
            wx.showToast({
              title: '图片裁剪失败',
              icon: 'none',
              duration: 1000
            })
            setTimeout(() => {
              this.clipConsole();
            },1000)
            console.error("clipConfirm-err",error)
          }
        },this)
      })
    },
    /**
     * 取消裁剪/裁剪失败
     */
    clipConsole() {
      console.log('clipConsole')
      this.triggerEvent('clipConsole')
    }
  }
});
