# hackernews-list-react-ts

**English** | [简体中文](README.zh-CN.md)

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

- [hackernews-list-react-ts](#hackernews-list-react-ts)
  - [Subject](#subject)
  - [Requirements](#requirements)
    - [Requirements for UI](#requirements-for-ui)
    - [Requirements about Tech](#requirements-about-tech)
  - [API Spec](#api-spec)
    - [Example](#example)

## Subject

To display HackerNews info as list.

## Requirements

### Requirements for UI

1. Display a list of HackerNews top stories(100news).
2. Before data finishes fetching, please show a loader.
3. Each news post has a link to navigate to the actual page as a new tab.
4. Infinite scrolling or Pagination.
5. Animations.
6. Unit testing, snapshot testing.

### Requirements about Tech

1. Use `React`. If you would like, you can use any meta framework of your choice (eg. `Next.js`).
2. Use `TypeScript`.
3. **DO NOT** use a UI library (eg. `Material UI`, `Bootstrap`). You can use a CSS framework if you would like(eg. `styled-component`, `css-in-module`, `Tailwind`, etc).

## API Spec

> https://github.com/HackerNews/API

### Example

- top stories api
https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
- fetch individual story
https://hacker-news.firebaseio.com/v0/item/{itemId}.json?print=pretty
https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty
