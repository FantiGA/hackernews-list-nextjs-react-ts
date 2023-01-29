# hackernews-list-nextjs-react-ts

[English](README.md) | **简体中文**

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

- [hackernews-list-nextjs-react-ts](#hackernews-list-nextjs-react-ts)
  - [架构](#架构)
  - [要求](#要求)
  - [策略](#策略)
  - [维护者](#维护者)
  - [许可证](#许可证)

欢迎。

这是一个使用 NextJS、 React 和 styled-components 根据 HackerNews API 生成的无限加载的演示。

[演示](https://fantiga.github.io/hackernews-list-nextjs-react-ts/)

## 架构

  - 主要的 Javascript 框架是 [React 18.2](https://reactjs.org/) 版本。
  - 主要的 React 框架是 [NextJS 13.1.2](https://nextjs.org/) 版本。
  - 使用 [styled-components 5.3.6](https://styled-components.com/) 来进行样式的管理。
  - 使用 [react-intersection-observer 9.4.1](https://github.com/thebuilder/react-intersection-observer#readme) 来监视 Element 进入或离开 Viewport 。
  - 它遵循 `Typescript` 和 `ESLint` 的类型检查和语法规范。

## 要求

  1. 显示 HackerNews 头条新闻列表（100 条新闻）。
  2. 在数据完成获取之前，显示一个 Loading。
  3. 每篇新闻文章都有一个链接，可以导航到作为新选项卡的实际页面。
  4. 无限滚动或分页。
  5. 动画。

## 策略

  1. `/pages/index.tsx` 是入口文件。
  2. `/pages/_document.tsx` 引入了一个网页公共头部文件 `/components/Header.tsx`。
  3. `/components/List.tsx` 是列表页面。
  4. `/components/Loading.tsx` Loading 页面应用了简单的动画。
  5. `/utils/` 目录放入了公共的部分。`common.ts` 包含了用到的一些常量和异步获取数据的方法，`interface.ts` 则定义了所有组件用到的类型。
  6.  通过指定的 API `https://github.com/HackerNews/API` ，将返回的数据根据要求渲染页面。
  7.  累计花费时间：约 `40+` 小时。

## 维护者

[@FantiGA](https://github.com/FantiGA)

## 许可证

[MIT](LICENSE)  © 2023 [@FantiGA](https://github.com/FantiGA)
