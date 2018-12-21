Page({
  data: {
    btnList1: [
      {
        text: '取消',
        style: 
        `
          width: 120rpx;
          height: 100%;
          background-color: #ddd;
          text-align: center;
          font-size: 30rpx;
          color: #fff;
        `,
        autoClose: true,
        btnEvent: 'cancelClick'
      },
      {
        text: '删除',
        style: 
        `
          width: 120rpx;
          height: 100%;
          background-color: #f23030;
          text-align: center;
          font-size: 30rpx;
          color: #fff;
        `,
        autoClose: true,      
        btnEvent: 'deleteClick'
      }
    ],
    btnList2: [
      {
        text: '短',
        style: 
        `
          width: 60rpx;
          height: 100%;
          background-color: #ddd;
          text-align: center;
          font-size: 30rpx;
          color: #fff;
        `,
        autoClose: true,
      },
      {
        text: '长按钮',
        style: 
        `
          width: 180rpx;
          height: 100%;
          background-color: #f23030;
          text-align: center;
          font-size: 30rpx;
          color: #fff;
        `,
        autoClose: true,      
      }
    ],
    btnList3: [
      {
        text: '删除',
        style: 
        `
          width: 120rpx;
          height: 100%;
          background-color: #f23030;
          text-align: center;
          font-size: 30rpx;
          color: #fff;
        `,
        autoClose: true,          
        btnEvent: 'deleteClick'
      }
    ],
    btnList4: [
      {
        text: '提交',
        style: 
        `
          width: 120rpx;
          height: 100%;
          background-color: #108ee9;
          text-align: center;
          font-size: 30rpx;
          color: #fff;
        `,
        autoClose: true,
        btnEvent: 'submitClick'
      },
      {
        text: '取消',
        style: 
        `
          width: 120rpx;
          height: 100%;
          background-color: #ddd;
          text-align: center;
          font-size: 30rpx;
          color: #fff;
        `,
        autoClose: true,      
        btnEvent: 'cancelClick'
      }
    ]
  },
  submitClick: function () {
    console.log('submitClick');
  },
  cancelClick: function () {
    console.log('cancelClick');
  },
  deleteClick: function () {
    console.log('deleteClick');
  }
});