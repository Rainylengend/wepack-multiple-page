# webpack多页面应用配置

> 开箱即用的webpack多页面应用，提供简单的功能，如需要更高级配置可自行修改webpack目录下的文件即可, 如果觉得还不错请送出您的`star`

## 如何启动项目？

1. clone此项目
2. 进入项目目录
3. npm install
4. npm run dev
5. 打开localhost:8080

## 目录介绍

- src (为开发的根目录)
    - index.html (项目的首页入口)
    - page （为项目其他html文件的放置位置）
    - js （项目的每个页面js入口的位置）
    - scss （项目的scss文件书写的位置）

- webpack （webpack的配置目录）
    - base.js (公共的webpack配置)
    - build.js (生产环境下的webpack配置)
    - dev.js (开发环境下的webpack配置)

## 如何新增webpack文件入口

只需修改webpack/base.js的entry以及在新加对应的HtmlWebpackPlugin即可

## npm 命令

```
npm run dev
npm run build
```

- dev为开发环境
- build 为生产环境

