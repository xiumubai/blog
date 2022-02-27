---
title: 使用dumi搭建UI组件库
date: 2022-01-29 14:57:02
permalink: /pages/6c15b0/
sidebar: auto
categories:
  - 随笔
tags:
  - 
---
## 什么是[dumi](https://d.umijs.org/zh-CN)


dumi，中文发音嘟米，是一款为组件开发场景而生的文档工具，与 father 一起为开发者提供一站式的组件开发体验，father 负责构建，而 dumi 负责组件开发及组件文档生成。

> **特性**
>1. 📦 开箱即用，将注意力集中在组件开发和文档编写上
>2. 📋 丰富的 Markdown 扩展，不止于渲染组件 demo
>3. 🏷 基于 TypeScript 类型定义，自动生成组件 API
>4. 🎨 主题轻松自定义，还可创建自己的 Markdown 组件
>5. 📱 支持移动端组件库研发，内置移动端高清渲染方案
>6. 📡 一行命令将组件资产数据化，与下游生产力工具串联

## 环境准备

首先得有[node](https://nodejs.org/en/)，并确保 node 版本是 10.13 或以上。

```shell
$ node -v
v10.13.0
```

## 初始化脚手架

创建空文件夹
`mkdir dumi-ui-site-template`

初始化一个站点模式的组价库开发脚手架

`$ yarn create @umijs/dumi-lib --site`

## 运行

执行 `npm run dev` 或 `npx dumi dev` 即可开始调试组件或编写文档。

执行效果如下:

[!img](https://xiumubai.oss-cn-beijing.aliyuncs.com/blog/785C40C0-95EF-419D-BE5D-335BD2274B5F.png)

## 开发一个button组件

在`src`下面创建文件`Button`文件。

创建三个文件

index.tsx

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import * as vars from '../styles/vars';
import { isMobile } from '../utils/dom';
import { getThemeColorCss } from '../styles/themeHelper';
type Props = {
  /** default 线框，primary 实色框 */
  type?: 'default' | 'primary';
  /** 线框使用主题色 */
  active?: boolean;
  /** 禁用 */
  disabled?: boolean;
  /** 自定义style */
  style?: React.CSSProperties;
  /** 按钮类型 */
  htmlType?: 'submit' | 'reset' | 'button' | undefined;
  /** 块级按钮 */
  block?: boolean;
  children?: React.ReactNode;
  /** 自定义className */
  className?: string;
  /** 圆形按钮 */
  circle?: boolean;
  /** 虚线边 */
  dashed?: boolean;
  /** 设置危险按钮 */
  danger?: boolean;
  /** 设置为展示的标签，比如div,a,button */
  as?: any;
  /** 设置按钮的图标组件 */
  icon?: React.ReactNode;
  /** 设置按钮加载状态 */
  loading?: boolean;
  /** 是否幽灵按钮 */
  ghost?: boolean;
  /** 点击回调 */
  onClick?: (e: React.SyntheticEvent) => void;
  /** 点击后，下次能点击的时间间隔，防止重复点击, 如果是true, 间隔默认是1s  */
  wait?: number | boolean;
};

const StyledButton = styled.button`
  color: inherit;
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  box-sizing: border-box;
  outline: 0;
  position: relative;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  appearance: none;
  -webkit-tap-highlight-color: transparent;

  font-weight: 400;
  white-space: nowrap;
  background-image: none;
  transition: all 0.3s ease;
  user-select: none;
  touch-action: manipulation;
  padding: 4px 16px;
  font-size: 14px;
  border-radius: 2px;
  border: 1px solid transparent;
  height: 32px;

  &.default {
    background-color: #fff;
    border-color: ${vars.border};

    ${isMobile ? '&:active' : '&:hover'} {
      opacity: 0.8;
    }

    &.pc:hover,
    &.active {
      ${getThemeColorCss('border-color')}
      ${getThemeColorCss('color')}
    }

    &.mobile:active {
      background-color: ${vars.activeBg};
    }

    &.danger,
    &.danger:hover,
    &.danger:active {
      color: ${vars.danger};
      border-color: ${vars.danger};
    }
  }

  &.primary {
    ${getThemeColorCss('background-color')}
    ${getThemeColorCss('border-color')}
    color: #fff;

    ${isMobile ? '&:active' : '&:hover'} {
      opacity: 0.8;
    }

    &.danger,
    &.danger:hover,
    &.danger:active {
      background-color: ${vars.danger};
      border-color: ${vars.danger};
    }
  }

  &.disabled,
  &.disabled:hover,
  &.disabled:active {
    cursor: not-allowed;
    opacity: 0.6;
    pointer-events: none;
  }

  &.block {
    width: 100%;
  }

  &.circle {
    min-width: 32px;
    padding: 0;
    border-radius: 50%;
  }

  &.dashed {
    border-style: dashed;
  }

  &.ghost,
  &.ghost:hover {
    color: ${vars.border};
    background-color: transparent;
    border-color: ${vars.border};
  }

  &.anchor {
    margin: unset;
    padding: unset;
    background: unset;
    border: none;
    ${getThemeColorCss('color')}
    height: unset;
  }
`;
const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    children,
    type = 'default',
    disabled,
    block,
    active,
    danger,
    circle,
    dashed,
    loading,
    ghost,
    className,
    htmlType,
    onClick,
    wait,
    ...rest
  } = props;

  return (
    <StyledButton
      {...rest}
      ref={ref}
      disabled={disabled}
      type={htmlType}
      className={clsx(
        'uc-btn',
        type,
        {
          disabled: disabled || loading,
          block: block,
          danger: danger,
          circle: circle,
          dashed: dashed,
          ghost: ghost,
          pc: !isMobile,
          anchor: rest.as === 'a',
          active,
        },
        className,
      )}
    >
      {children}
    </StyledButton>
  );
});

Button.displayName = 'UC-Button';

export default Button;

```

index.md

```md
---
title: Button 按钮
order: 0
group:
  title: 基础组件
nav:
  title: '组件'
  path: /components
---

## Demo

<code src="../../demo/Button/index.jsx"></code>

<API src="./index.tsx"></API>
```

API直接从ts类型定义中自动生成

### Demo代码

在根目录创建`demo`文件夹，然后创建一个`Button`文件夹，创建一个`index.tsx`文件，

```js
import React from 'react';
import { Button } from 'dumi-ui-site-template';

export default function App() {
  return (
    <>
      <div title="基础按钮">
        <Button>Default</Button>
        <Button active>Outline</Button>
        <Button danger>Danger</Button>
        <Button type="primary">Primary</Button>
        <Button type="primary" danger>
          Primary
        </Button>
      </div>

      <div title="块级按钮">
        <Button block>Block default</Button>
        <Button block type="primary">
          Block primary
        </Button>
        <Button block danger dashed>
          Block danger
        </Button>
      </div>
    </>
  );
}
```

这样一个基础的Button组件就构建好了，最后在`src/index.ts`文件中暴露出去

```js
export { default as Button } from './Button';
```

## 构建

1. 构建站点文档

`npm run docs:build` 构建产物输出到`docs-dist`

部署到ECS服务器，[预览地址](http://wood.xiumubai.com/)

2. 构建组件开发脚手架

`npm run build`构建产物输出到`es`

发布到npm，[参考教程](https://juejin.cn/post/6875589116776579079)

## 下期预告

- [从0开始部署个人网站](http://wood.xiumubai.com)

## 系列文章

- [从0搭建cli脚手架](https://juejin.cn/post/7051851544391598094)
- [从0搭建UI组件库](https://juejin.cn/post/7051851544391598094)

## 常用UI组件库友情推荐

- [ant design](https://ant.design/index-cn)
- [Element](https://element.eleme.cn/#/zh-CN)
- [Naive UI](https://www.naiveui.com/zh-CN/dark)