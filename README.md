### 一、组件库使用说明

（1）安装：

```
  npm install @jdcfe/yep-mp-com
  或者(指定 npm 源)
  npm install @jdcfe/yep-mp-com --registry=https://registry.npmjs.org/
```

（2）构建:

在小程序开发工具里，打开当前要引用组件库的项目，点击“工具”->“构建 npm”，构建完毕后，在文件夹中会出现“miniprogram_npm”文件夹，则表示构建成功。

（3）使用(详细请参看说明文档):

在相应页面的 .json 文件中引入次组件，以 dialog 弹框组件为例：

```
{
  "usingComponents": {
    "dialog":"@jdcfe/yep-mp-com/dialog"
  }
}
```

### 二、说明文档

**http://yep-mp.jd.com**

![](https://img13.360buyimg.com/imagetools/jfs/t1/42279/5/10568/69342/5d3fa408Eb69c4270/eb6c6e3717cc6d00.png)

### 三、小程序 demo 示例

微信搜索 **YepMP** 小程序

![](https://img14.360buyimg.com/imagetools/jfs/t1/78606/20/5883/45474/5d3fa3afEa3dbc35b/f631c9b98948c72f.jpg)
