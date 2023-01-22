/*
 * @Author: fantiga
 * @Date: 2023-01-15 19:45:05
 * @LastEditTime: 2023-01-22 19:20:09
 * @LastEditors: fantiga
 * @FilePath: /hackernews-list-react-ts/pages/index.tsx
 */

import { FC, Suspense } from "react";
import styled from "styled-components";
import Header from "@components/Header";
import List from "@components/List";
import Loading from "@components/Loading";

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
          <Suspense fallback={<Loading />}>
            <List limit={100} />
          </Suspense>
        </Wrapper>
      </Container>
    </>
  );
};

export default Home;
