## 小程序组件库，组件源码

### 开发说明

(1) src 目录为组件源码，example 为组件使用实例

(2) 开发流程为在 example，编写组件与使用范例，测试完成将其备份至 src 下，
执行 npm run dev 指令可同步 src 下组件至 example

### 常用指令

```
# 下载并安装依赖
npm install 

# 将 src 组件更新到 example 目录下，可用小程序开发工具打开 example 目录。
npm run dev

# 打生产包
npm run build

# 修复脚本语法错误
npm run lint

```

### 发版

(1) 注册 npm 账号（如果已注册请忽略此条）

(2) 登录：npm login 或者 npm adduser

(3) 验证：npm who am i

(4) 发布(私有包)：npm publish --access=public

### 组件库使用说明

- 安装：

  ```
  npm install @jdcfe/yep-mp-com
  ```
  
- 构建

  在小程序开发工具里，打开当前要引用组件库的项目，点击“工具”->“构建npm”，构建完毕后，在文件夹中会出现“miniprogram_npm”文件夹，则表示构建成功。

- 引用
  在相应页面的 .json 文件中引入次组件，以 dialog 弹框组件为例：

```
{
  "usingComponents": {
    "dialog":"@jdcfe/yep-mp-com/dialog"
  }
}

```

### 特殊说明

如果有更好的工作流程方式。欢迎共享积极贡献代码。
