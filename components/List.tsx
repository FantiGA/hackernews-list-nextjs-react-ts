/*
 * @Author: fantiga
 * @Date: 2023-01-15 21:21:06
 * @LastEditTime: 2023-01-29 22:26:46
 * @LastEditors: fantiga
 * @FilePath: /hackernews-list-react-ts/components/List.tsx
 */

import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { API, fetcher, PAGE_SIZE } from "@utils/common";
import { TStory } from "@utils/interface";
import Loading from "./Loading";
import { useInView } from "react-intersection-observer";

const Link = styled.a`
  display: flex;
  padding: 0.5em;

  &:hover {
    background-color: #cccccc;
  }
`;

const List: FC = () => {
  const [storyList, setStoryList] = useState<TStory[]>([]);
  const [page, setPage] = useState<number>(0);
  const [totalNum, setTotalNum] = useState<number>(0);
  const [showLoading, setShowLoading] = useState<boolean>(true);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  /**
   * Get data asynchronously / 异步获取数据
   * @param {number} page
   * @param {number} limit
   * @return {Promise<TStory[]>}
   */
  const getStoriesData = async (page: number = 0, limit: number = PAGE_SIZE): Promise<TStory[]> => {
    const ids = await fetcher(API + "topstories.json?print=pretty");
    // Calculate the total number of pages / 计算总页数
    setTotalNum(Math.ceil(ids.length / limit));

    return await Promise.all(
      ids.slice(limit * page, limit * page + limit).map(
        async (id: number): Promise<TStory> => {
          return await fetcher(API + `item/${id}.json?print=pretty`);
        }
      )
    );
  };

  /**
   * Responding to scrolling side effects, if scrolling to the bottom, `page + 1`.
   * 响应滚动的副作用，如果滚到底了，`page + 1`。
   * @return {*}
   */
  useEffect(() => {
    if (inView && page < totalNum) {
      setPage(page + 1);
    }
  }, [inView]);

  /**
   * Respond to side effects of `page` changes.
   * If the `page` changes, get the content of the `page` and merge it into the `storyList`.
   * 响应 `page` 变化的副作用。
   * 如果 `page` 变化了，获取第 `page` 页的内容，并合并进 `storyList`。
   */
  useEffect(() => {
    if (page <= totalNum) {
      getStoriesData(page).then((res) => {
        setShowLoading(true);
        if (!res) {
          setShowLoading(false);
          return;
        }
        setStoryList([...storyList, ...res]);
      });
    }
    setShowLoading(false);
  }, [page]);

  return (
    <>
      <ol>
        {
          storyList.map((story) => {
            return <li key={story.id}><Link href={story.url} target="_blank">{story.title}</Link></li>;
          })
        }
      </ol>

      <div ref={ref}>
        {!showLoading ? <Loading /> : ""}
      </div>
    </>
  );
};

export default List;
