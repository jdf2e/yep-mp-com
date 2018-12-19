## 小程序组件库，组件源码
### 使用说明
- 安装：
> npm install @jdcfe/yep-mp-com

- 引用
在相应页面的 .json 文件中引入次组件，以dialog弹框组件为例：
```
{
  "usingComponents": {
    "dialog":"@jdcfe/yep-mp-com/dialog"
  }
}

```
### 常用指令

(1) npm run dev : 生成 miniprogram_dev 文件夹，可用小程序开发工具打开。

(2) npm run build : 打生产包

(3) npm run lint : 修复脚本语法错误

### 发版
(1) 注册 npm 账号（如果已注册请忽略此条）

(2) 登录：npm login 或者 npm adduser

(3) 验证：npm  who am i

(4) 发布(私有包)：npm publish --access=public 
