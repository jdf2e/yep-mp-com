Component({
  properties: {
    imgList: {
      // 上传图片
      type: Array,
      value: []
    },
    maxImgCount: {
      // 允许最大上传数量
      type: Number,
      value: 6
    },
    size: {
      // 图片大小
      type: Number,
      value: 230
    }
  },

  data: {},

  attached() {},

  methods: {
    /**
     * 打开相册选择图片
     */
    choicePic() {
      let imgCount = this.data.maxImgCount - this.data.imgList.length;
      wx.chooseImage({
        count: imgCount,
        success: res => {
          let imgList = this.data.imgList.concat(res.tempFilePaths);
          this.setData({
            imgList
          });
          this.triggerEvent('addImg', { tempFilePath: res.tempFilePaths }, {});
        }
      });
    },

    /**
     * 删除图片
     */
    deleteImg: function(e) {
      let index = e.target.dataset.index;
      this.data.imgList.splice(index, 1);
      this.setData({
        imgList: this.data.imgList
      });
      this.triggerEvent('deleteImg', { index: index }, {});
    }
  }
});
