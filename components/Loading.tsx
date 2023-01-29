/*
 * @Author: fantiga
 * @Date: 2023-01-21 14:05:52
 * @LastEditTime: 2023-01-29 14:32:23
 * @LastEditors: fantiga
 * @FilePath: /hackernews-list-react-ts/components/Loading.tsx
 */

import styled, { keyframes } from "styled-components";

const opacity = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const LoadingUI = styled.div`
  animation: ${opacity} 2s linear infinite;
`;

const Loading = () => <LoadingUI>Loading...</LoadingUI>;

export default Loading;
