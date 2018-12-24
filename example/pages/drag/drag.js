// 拖拽实例页面
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[{
        name:'腾讯传（1998-2016）',
        desc:'中国互联网发展史，荡气回肠，值得品味。对创业者也很有启发。',
        image:'https://img12.360buyimg.com/n7/jfs/t3946/50/446886753/186144/18672b2c/584fb368Nb5005598.jpg!q50.jpg',
        id:1001
    },{
        name: '文学名家名著：史蒂夫·乔布斯传',
        desc: '漫漫冬日，读书相伴。',
        image: 'https://img12.360buyimg.com/n7/jfs/t5635/11/1977127270/601721/21a50175/592bf165N13d3930f.jpg!q50.jpg',
        id: 1002
    }, {
        name: '乔纳森传',
        desc: '比乔布斯传更震撼，真正懂得了设计改变一个公司，合作的真正意义',
        image: 'https://img12.360buyimg.com/n7/jfs/t1234/127/18857706/554566/4a6e2ce2/54e19ed3N9efd7a4a.jpg!q50.jpg',
        id: 1003
    }, {
        name: '变革中国：市场经济的中国之路',
        desc: '自由思想启蒙之作，当年在地铁十三号线上读完的，如醍醐灌顶。',
        image: 'https://img12.360buyimg.com/n7/g8/M01/10/0F/rBEHaFDGm10IAAAAAADVhEsRHzMAADN6APTXh0AANWc874.jpg',
        id: 1004
      }]
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})