/*
 * @Author: fantiga
 * @Date: 2023-01-10 20:42:56
 * @LastEditTime: 2023-01-10 20:43:58
 * @LastEditors: fantiga
 * @FilePath: /todo-list-react-ts/client/src/index.tsx
 */

import React from 'react';
import { createRoot } from 'react-dom/client';

import IndexContainer from './pages/Index';

/**
 * React 18
 */

const container: HTMLElement =
  document.getElementById('root') || document.createElement('div');
/** Create a root. / 创建一个root。 */
const root = createRoot(container);
/** Initial Render: Renders an element to the root. / 初始渲染：将一个元素渲染到root。 */
root.render(
  <React.StrictMode>
    <IndexContainer />
  </React.StrictMode>
);
