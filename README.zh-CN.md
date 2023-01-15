# hackernews-list-react-ts

[English](README.md) | **简体中文**

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

- [hackernews-list-react-ts](#hackernews-list-react-ts)
  - [主题](#主题)
  - [要求](#要求)
    - [用户界面要求](#用户界面要求)
    - [技术要求](#技术要求)
  - [API 规范](#api-规范)
    - [例子](#例子)

## 主题

将 HackerNews 信息显示为列表。

## 要求

### 用户界面要求

1. 显示 HackerNews 头条新闻列表（100 条新闻）。
2. 在数据完成获取之前，请显示一个加载器。
3. 每篇新闻文章都有一个链接，可以导航到作为新选项卡的实际页面。
4. 无限滚动或分页。
5. 动画。
6. 单元测试、快照测试。

### 技术要求

1. 使用 `React`。如果愿意，您可以使用您选择的任何元框架（例如 Next.js）。
2. 使用 `TypeScript`。
3. **不要**使用 UI 库（例如 `Material UI`, `Bootstrap`）。如果您愿意，可以使用 CSS 框架（例如，`styled-component`、`css-in-module`、`Tailwind` 等）。

## API 规范

> https://github.com/HackerNews/API

### 例子

- 头条新闻
https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
- 获取单个新闻
https://hacker-news.firebaseio.com/v0/item/{itemId}.json?print=pretty
https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty
