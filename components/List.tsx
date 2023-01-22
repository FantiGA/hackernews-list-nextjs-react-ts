/*
 * @Author: fantiga
 * @Date: 2023-01-15 21:21:06
 * @LastEditTime: 2023-01-22 15:21:43
 * @LastEditors: fantiga
 * @FilePath: /hackernews-list-react-ts/components/List.tsx
 */

import { FC, memo } from "react";
import { SWRConfig } from "swr";
import styled from "styled-components";
import { useStories } from "@utils/common";
import { IList } from "@utils/interface";
import Error from "./Error";
import Loading from "./Loading";

const Link = styled.a`
  display: flex;
  padding: 0.5em;

  &:hover {
    background-color: #cccccc;
  }
`;

const ListUI = styled.li`
  /* list-style: none; */
`;


const List: FC<IList> = memo(({ limit, fallback }) => {
  const { data: stories, error, isLoading } = useStories(limit);
  if (isLoading) return <Loading />;
  if (error) return <Error message="Failed to load" />;

  return (
    <SWRConfig value={{ fallback }}>
      <ol>
        {
          stories?.map((story) => {
            return <ListUI key={story.id}><Link href={story.url} target="_blank">{story.title}</Link></ListUI>;
          })
        }
      </ol>
    </SWRConfig>
  );
});

export default List;
