### 组件库使用说明

- 安装：

  ```
  npm install @jdcfe/yep-mp-com

  ```

  或者

  ```

  npm install @jdcfe/yep-mp-com --registry=https://registry.npmjs.org/

  ```

- 构建

  在小程序开发工具里，打开当前要引用组件库的项目，点击“工具”->“构建 npm”，构建完毕后，在文件夹中会出现“miniprogram_npm”文件夹，则表示构建成功。

- 使用
  在相应页面的 .json 文件中引入次组件，以 dialog 弹框组件为例：

```
{
  "usingComponents": {
    "dialog":"@jdcfe/yep-mp-com/dialog"
  }
}
```
