Page({
    data:{
        rate_1:[1],
        rate_2:[1,1,1],
        rate_3:[1,1,1],
        rate_test:'1级',
        colorArr:['#3C3C3C','#8c8c00','#c4c400','#FF1493','#DC143C'],
        descArr:['极差！！','失望！','一般~','满意~~','惊喜！！~']
    },
    onLoad: function(options){

    },
    onShow: function(){

    },
    //触发事件
    rateChange:function(value){
        console.log("rateChange",value)
    },
})