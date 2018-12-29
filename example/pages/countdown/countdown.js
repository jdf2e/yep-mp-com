Page({
  data: {
    myStatus: 'ing'
  },

  cb(){
    this.setData({
      myStatus: 'end'
    })
    console.log('ok')
  }
})