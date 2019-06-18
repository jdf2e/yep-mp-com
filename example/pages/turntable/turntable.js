
Page({
  data: {
    id: '',
    awardInfo: [
      {
        'awardId':'111',
        'imgDesc':"1京粒",
        'imgUrl':"https://m.360buyimg.com/uba/jfs/t1/25171/6/2993/6426/5c232f6fE2d629fcb/50f8c234d7d4e7e0.png"
      },
      {
        'awardId':'222',
        'imgDesc':"3京粒",
        'imgUrl':"https://m.360buyimg.com/uba/jfs/t1/27145/15/3000/8497/5c232ff5E54f431fc/50b8c6993271228b.png"
      },
      {
        'awardId':'333',
        'imgDesc':"区块房1套",
        'imgUrl':"https://m.360buyimg.com/uba/jfs/t1/23480/28/3013/6937/5c233017Eb23dead1/717b5479ccaaf906.png"
      },
      {
        'awardId':'444',
        'imgDesc':"DW手表",
        'imgUrl':"https://m.360buyimg.com/uba/jfs/t1/15486/30/2964/7799/5c232ffeE6dff156c/66aa48be95eb38a5.png"
      },
      {
        'awardId':'555',
        'imgDesc':"继续加油",
        'imgUrl':"https://m.360buyimg.com/uba/jfs/t1/10090/20/9774/13336/5c47d6caE869dd942/3ee94fa98f4570a6.png"
      },
      {
        'awardId':'666',
        'imgDesc':"免租1个月",
        'imgUrl':"https://m.360buyimg.com/uba/jfs/t1/27793/14/3021/7925/5c23301bEf7004288/c897c0204b647b25.png"
      }
    ]
  },
  // 点击开始抽奖，模拟接口返回(随机数据)
  rotateConfirm() {
    let randomIndex = Math.ceil(Math.random() * 5),
    awardId = this.data.awardInfo[randomIndex].awardId;
    setTimeout(() => {
      this.setData({
        id: awardId
      })
      console.log("rotating~~~")
    },100)
  },
  // 抽奖结束回调
  rotateEnd() {
    console.log("rotateEnd!!!")
  }
})