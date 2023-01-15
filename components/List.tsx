/*
 * @Author: fantiga
 * @Date: 2023-01-15 21:21:06
 * @LastEditTime: 2023-01-15 21:23:30
 * @LastEditors: fantiga
 * @FilePath: /hackernews-list-react-ts/components/List.tsx
 */

import { FC } from "react";
import Item from "./Item";

const List: FC = () => {
  return (<ul>
    <li><Item /></li>
  </ul>);
};

export default List;
