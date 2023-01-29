/*
 * @Author: fantiga
 * @Date: 2023-01-15 19:45:05
 * @LastEditTime: 2023-01-29 22:24:32
 * @LastEditors: fantiga
 * @FilePath: /hackernews-list-react-ts/pages/index.tsx
 */

import { FC } from "react";
import styled from "styled-components";
import Header from "@components/Header";
import List from "@components/List";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  min-width: 500px;
  max-width: 1000px;
`;

const TitleUI = styled.h1`
  line-height: 4em;
  text-align: center;
`;

const Home: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <TitleUI>HackerNews List React TS</TitleUI>
          <List />
        </Wrapper>
      </Container>
    </>
  );
};

export default Home;
