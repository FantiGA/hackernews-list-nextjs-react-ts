# todo-list-react-ts

[English](README.md) | **简体中文**

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

- [todo-list-react-ts](#todo-list-react-ts)
  - [主题](#主题)
  - [指示](#指示)
    - [Todo 应用程序（示例）](#todo-应用程序示例)
    - [组件（必须）](#组件必须)
    - [颜色（必须）](#颜色必须)
  - [要求](#要求)
    - [超出范围](#超出范围)
    - [要求清单（必须）](#要求清单必须)
    - [技术要求](#技术要求)
    - [可选要求](#可选要求)
  - [如何提交](#如何提交)

## 主题

创建待办事项应用程序。

## 指示

至少，申请人在构建 Todo 应用程序时应使用下面列出的所有**组件**和**颜色**。除此之外，您可以自由选择您认为最合适的样式/设计。

### Todo 应用程序（示例）

![Todo 应用程序（示例）](01_todo_app_example.png)

### 组件（必须）

![组件（必须）](02_components_must.png)

### 颜色（必须）

![颜色（必须）](03_colors_must.png)

## 要求

### 超出范围

超出编码评估范围。

- 用户（没有必要为每个用户创建单独的待办事项）。
- 使用 API 或 DB 的数据持久性（不禁止您使用它）。
- 删除和更新 TODO。

### 要求清单（必须）

1. 可以创建一个 TODO（创建时状态为 Completed）。
  - TODO 是通过键入文本并单击 `Enter` 来创建的。
2. 创建的数据将存储在 store 中（全局状态管理）。
3. 每个 TODO 有两种状态，`active` 和 `completed`。
4. 可以显示创建的 TODO 列表。
  列表的顺序是：
   - `active` 是第一个，`completed` 是第二个。
   - 下一个顺序是 `creation` 的顺序（最后创建的待办事项将显示在顶部）。
5. 点击创建的 TODO ，可以将状态从 `active` 改为 `completed`。
6. 一旦 TODO `completed`，就不能再变为 `active` 状态。
7. TODO 列表可以按以下条件过滤。
   - 无过滤。
   - 仅显示 `active` 项目。
   - 仅显示 `completed` 项目。

### 技术要求

1. 使用 `React` （使用 `Preact` , `Next.js` 也可以）。
2. 使用 `TypeScript`。
3. 不使用 UI 库（例如 `Material UI`, `Bootstrap`）。但是要使用 CSS 框架（例如 `styled-component`、`css-in-module`、`vanilla-extract`、`Tailwind`）都可以。

### 可选要求

我们很高兴有机会看到您在更广泛的上下文中实现的代码，尽管满足许多可选要求并不总是值得的。

- 动画。
- 无限滚动或分页。
- 单元测试、快照测试、端到端测试。

## 如何提交

如果可能，请将源代码上传到某个存储库（例如 `github`、`gitlab`、`bitbucket`）。
