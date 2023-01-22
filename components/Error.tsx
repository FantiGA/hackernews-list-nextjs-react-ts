/*
 * @Author: fantiga
 * @Date: 2023-01-21 16:48:51
 * @LastEditTime: 2023-01-21 16:52:20
 * @LastEditors: fantiga
 * @FilePath: /hackernews-list-react-ts/components/Error.tsx
 */

import { FC } from "react";
import { IError } from "@utils/interface";
import styled from "styled-components";

const ErrorUI = styled.div`
  margin: 2em 0;
  color: #ff0000;
`;

const Error: FC<IError> = ({ message }) => <ErrorUI>{message}</ErrorUI>;

export default Error;
