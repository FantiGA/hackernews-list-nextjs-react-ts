# hackernews-list-nextjs-react-ts

**English** | [简体中文](README.zh-CN.md)

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

- [hackernews-list-nextjs-react-ts](#hackernews-list-nextjs-react-ts)
  - [Architecture](#architecture)
  - [Requirements](#requirements)
  - [Strategies](#strategies)
  - [Maintainers](#maintainers)
  - [License](#license)

Welcome.

This is an infinite loading demo generated from the HackerNews API using NextJS, React and styled-components.

[Demo](https://fantiga.github.io/hackernews-list-nextjs-react-ts/out/)

## Architecture

 - The main Javascript framework is [React 18.2](https://reactjs.org/) version.
 - The main React framework is [NextJS 13.1.2](https://nextjs.org/) version.
 - Use [styled-components 5.3.6](https://styled-components.com/) for style management.
 - Use [react-intersection-observer 9.4.1](https://github.com/thebuilder/react-intersection-observer#readme) to monitor Element entering or leaving Viewport.
 - It follows the type checking and syntax specifications of [Typescript](https://www.typescriptlang.org/) and [ESLint](https://eslint.org/).

## Requirements

  1. Display a list of HackerNews top stories(100news).
  2. Before data finishes fetching, show a loader.
  3. Each news post has a link to navigate to the actual page as a new tab.
  4. Infinite scrolling or Pagination.
  5. Animations.

## Strategies

  1. `/pages/index.tsx` is an entry file.
  2. `/pages/_document.tsx` introduces a webpage public header file `/components/Header.tsx`.
  3. `/components/List.tsx` is a list page.
  4. `/components/Loading.tsx` Loading page with simple animation applied.
  5. The `/utils/` directory puts the public section. `common.ts` contains some constants used and methods for asynchronously obtaining data, and `interface.ts` defines the types used by all components.
  6. Through the specified API `https://github.com/HackerNews/API`, the returned data will be rendered according to the requirements.
  7. Cumulative time spent: about `40+` hours.

## Maintainers

[@FantiGA](https://github.com/FantiGA)

## License

[MIT](LICENSE)  © 2023 [@FantiGA](https://github.com/FantiGA)
