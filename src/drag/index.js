// components/drag.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    items:{
      type:Array,
      values:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    itemHeight:0,//每个item的高度
    movableView: {//滑块相关信息
      y: 0,//y轴偏移量
      className:'none',//滑块是否展示
      item:{}//选中项item信息
    }
  },
  lifetimes: {
    ready(){
      this.validItems();
      Promise.all([this.getDistance('dragBottom'), this.getDistance('drag')]).then((values) => {
        const startPos = values[1];//列表开始位置
        const endPos = values[0];//列表结束位置
        let itemHeight = ((endPos - startPos) / this.data.items.length).toFixed(2);// 每个列表项高度
        this.setData({
          startPos,
          endPos,
          itemHeight
        })
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 获取指定dom元素的位置
     */
    getDistance: function (className) {
      return new Promise((resolve,reject)=>{
        wx.createSelectorQuery()
        .select("." + className)
        .boundingClientRect(function (rect) {
          resolve(rect.top.toFixed(1));//距离顶部距离
        })
        .exec();
      })
    },
    //触发拖拽事件
    draggleTouch: function (event) {
      var touchType = event.type;
      switch (touchType) {
        case "touchstart":
          this.scrollTouchStart(event);
          break;
        case "touchmove":
          this.scrollTouchMove(event);
          break;
        case "touchend":
          this.scrollTouchEnd(event);
          break;
      }
    },
    /**
     * 滚动开始
     */
    scrollTouchStart: function (event) {
      const {items, startPos, itemHeight} = this.data;
      let firstTouchPosition = {
        x: event.changedTouches[0].pageX,
        y: event.changedTouches[0].pageY,
      }
      let movableY = firstTouchPosition.y - startPos;
      this.balanceDis = movableY % itemHeight;
      movableY -= this.balanceDis;//初始化位置
      let obj = this.getPositionDomByXY(firstTouchPosition);
      this.setData({
        items: obj.items,
        movableView: {
          y: movableY,
          className: "",
          item: obj.item
        }
      })
    },
    /**
     * 拖动中
     */
    scrollTouchMove: function (event) {
      const { itemHeight, startPos ,items, movableView } = this.data;
      const choiceItem = movableView.item; //当前选中项
      let selectPosition = choiceItem.selectPosition, //选中项位置
        selectIndex = choiceItem.selectIndex, //选中项索引值
        moveDistance = event.changedTouches[0].pageY, //移动距离
        movableX = 0, //movable-area滑块位置处理
        movableY = event.changedTouches[0].pageY - startPos - this.balanceDis;//纵坐标位置
      if (moveDistance - selectPosition - itemHeight / 2 > 0 && selectIndex < items.length - 1) { //下移，不到最后一个
        if (items[selectIndex].id == choiceItem.id) {
          items.splice(selectIndex, 1);
          items.splice(++selectIndex, 0, choiceItem);
          selectPosition += Number.parseInt(itemHeight);
          this.setData({
            items,
          })
        }
      }
      if (moveDistance - selectPosition + itemHeight / 2 < 0 && selectIndex > 0) { //上移，大于第一个位置
        if (items[selectIndex].id == choiceItem.id) {
          items.splice(selectIndex, 1);
          items.splice(--selectIndex, 0, choiceItem);
          selectPosition -= Number.parseInt(itemHeight);
          this.setData({
            items,
          })
        }
      }
      choiceItem.selectPosition = selectPosition;
      choiceItem.selectIndex = selectIndex;
      this.setData({
        movableView:{
          y: movableY,
          className:'',
          item: choiceItem
        }
      });
    },
    /**
     * 拖动结束
     */
    scrollTouchEnd: function (event) {
      let items = null;
      if (this.data.items) {
        items = this.data.items.map((item) => {
          item.selectClass = "";
          return item;
        });
        this.setData({
          items,
          'movableView.className': "none"
        })
      }
    },
    /**
     * 获取滚动位置的数据对象
     */
    getPositionDomByXY: function (potions) {
      const {items, startPos, itemHeight } = this.data;
      let y = potions.y - startPos; //起初触摸点相对于下拉列表位置
      for (let i = 0, j = items.length; i < j; i++) {
        if (y >= i * itemHeight && y < (i + 1) * itemHeight) {
            let item = items[i];
            item.selectPosition = potions.y;
            item.selectIndex = i;
            items[i] = item;
            return {
              item,
              items
            };
        }
      }
      return {
        data: items[0],
        index: 0
      };
    },
    /**
     * 传入items进行校验
     */
    validItems:function(){
      const items = this.data.items.map((item,index)=>{
        if(!item.id){
          item.id = index;
        }
        return item;
      })
      this.setData({
        items
      })
    },
    /**
     * 获取排序后列表项结果
     */
    getCurItems:function(){
      return this.data.items;
    }
  }
})
