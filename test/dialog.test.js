const _ = require("./utils");
const path = require("path");
const simulate = require("miniprogram-simulate");
test("dialogstart", async () => {
  const id = _.load("../example/components/dialog/index", "dialog"); //由于miniprogram-simulate+jest的形式 不能支持ts文件，因此需要配先执行编译，然后引入example下的组件
  const comp = _.render(id, { btnType: 0, hasShade: true });
  //1.初始化state数据
  expect(comp.data).toEqual({
    btnType: 0,
    firstBtn: "取消",
    hasShade: true,
    isClose: true,
    isSpecialBtn: false,
    secondBtn: "确定"
  });
  //2.修改state
  comp.setData({
    //更新state数据
    isClose: false
  });
  expect(comp.data.isClose).toBe(false);
});
