const ratio = wx.getSystemInfoSync().windowWidth / 750;
Component({
  /**
   * 组件说明：
   *    observers 数据监听器从小程序基础库版本 2.6.1 开始支持
   * 
   * 参数说明：
   *    奖项数据(必传)
   *    awardInfo:[
   *      { 
   *        'awardId':'', 中奖id
   *        'imgDesc':'', 奖项描述
   *        'imgUrl':''   奖项图片
   *      },
   *      ...
   *    ]
   *    awardId: 中奖 id (接口返回或随机数据)
   */
  properties: {
    awardInfo :{ 
      type: Array,
      value: []
    },
    awardId: {
      type:String,
      value: ''
    }
  },
  data: {
    canvasSize: wx.getSystemInfoSync().windowWidth * 0.7, // canvas大小
    tableBg :"https://m.360buyimg.com/uba/jfs/t1/21946/1/14026/30907/5ca2ffe9E8147ab28/e10e8a43b6d81857.png", // 转盘背景

    tableImg: '', // 生成转盘图片
    rotateAnimate: '', // 旋转动效
    rotateDeg: 0, // 旋转角度
    isRotating: false, // 是否正在旋转
  },
  attached() {
    this.drawPic();
  },
  observers: {
    'awardId': function (awardId) {
      if(awardId == '') {
        return;
      }
      this.rotateStart(awardId)
    }
  },
  methods: {
    // 绘制奖项
    drawPic() {
      wx.showLoading({
        title: '加载中',
        mask: true
      });

      let imgList = this.data.awardInfo;
      imgList.push({
        imgDesc: '',
        imgUrl: this.data.tableBg
      });

      let arr = this.getPromiseArr(imgList);
      Promise.all(arr).then(res => {
        console.log("imgList",res)
        const ctx = wx.createCanvasContext('turntableCanvas',this);
        let canvasSize = this.data.canvasSize,
            fontSize = 12,
            fontColor = '#4F4794';
        // 设置字体大小及颜色
        ctx.setFontSize(fontSize);
        ctx.setFillStyle(fontColor);
        // 画背景图
        ctx.drawImage(res[6].path, 0, 0, canvasSize, canvasSize);
        ctx.translate(canvasSize / 2, canvasSize / 2);
        // 循环画6个奖项
        let metrics,
            ratio;
        for(let i = 0; i < 6; i ++) {
          metrics = ctx.measureText(res[i].imgDesc); // 图片宽高比
          ratio = res[i].width / res[i].height; // 文本宽度
          ctx.fillText(res[i].imgDesc, -metrics.width / 2, -66);
          ctx.drawImage(res[i].path, -27, -114.5, 36.5 * ratio, 36.5);
          ctx.rotate(60 * Math.PI / 180);
        }
        ctx.draw(true,() => {
          wx.canvasToTempFilePath({
            canvasId: 'turntableCanvas',
            x: 0,
            y: 0,
            width: canvasSize,
            height: canvasSize,
            quality: 1,
            success: (res) => {
              console.log('res.tempFilePath',res.tempFilePath)
              this.setData({
                tableImg: res.tempFilePath
              })
              wx.hideLoading();
            }
          },this)
        });
      })
    },
    getPromiseArr(imgList) {
      let arr = new Array();
      for (let i = 0; i < imgList.length; i++) {
        arr.push(
          new Promise((resolve) => {
            wx.getImageInfo({
              src: imgList[i].imgUrl,
              success: (res) => {
                let returnedTarget = Object.assign(imgList[i],res);
                resolve(returnedTarget)
              },
              fail: (err) => {
                console.log("getPromiseArr",err)
              }
            })
          })
        )
      }
      return arr;
    },
    /**
     * 点击开始抽奖
     * 圆盘旋转中禁止点击
     */
    rotateConfirm() {
      if (!this.data.isRotating) {
        this.setData({
          isRotating: true
        })
        this.triggerEvent('rotateConfirm',{},{});
      }
    },
    /** 
     * 旋转圆盘
     * 默认旋转5圈，3秒后停止
     */
    rotateStart(awardId) {
      console.log('中奖id',awardId)
      let rotate = this.data.rotateDeg + 360 * 5;
      this.data.awardInfo.map((value,index) => {
        if (value.awardId == awardId) {
          rotate = rotate - index * 60;
          this.setData({
            rotateDeg: rotate + index * 60,
            rotateAnimate: 'transition:all 3s ease;transform:rotate(' + rotate + 'deg)'
          })
          // 执行回调
          setTimeout(() => {
            this.setData({
              isRotating: false,
              awardId:''
            })
            this.triggerEvent('rotateEnd',{},{});
          }, 3000)
        }
      })
    }
  }
});
