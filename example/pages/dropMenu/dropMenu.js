Page({
    data: {
        dropMenuData:[
            {val: '苹果', isSel: false},
            {val: '橘子', isSel: false},
            {val: '香蕉', isSel: false}
        ],
        labelTxt: "水果：",
        selVal: '请选择类型',
        isDropMenu: true,
        curIndex: null
    },
    isDropDownShow: function (e) {
        let self = this;
        setTimeout(function () {
            self.setData({
                isDropDownShow: !self.data.isDropDownShow
            })
        }, 0);
    },
    select: function (e) {
        let selValue = e.currentTarget.dataset.item.val;
        let curIndex = e.currentTarget.dataset.index;
        this.setData({
            selVal: selValue,
            curIndex: curIndex,
            isDropDownShow: false
        });
    }
})