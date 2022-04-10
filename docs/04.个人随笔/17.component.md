---
title: component
date: 2022-02-10 19:57:10
permalink: /pages/7c3dca/
sidebar: auto
categories:
  - 随笔
tags:
  - 
---
# 组件库的开发

## 安装工具

`yarn add rollup @rollup/plugin-babel @babel/core @babel/preset-env @babel/preset-react @emotion/css @emotion/babel-preset-css-prop -D`

## 配置 `roolup.config.js`

```js
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: './lib/bundle.js',
    format: 'cjs',
  },
  plugins: [babel()],
  external: ['react'],
};
```

入口出口打包模式

babel 插件
