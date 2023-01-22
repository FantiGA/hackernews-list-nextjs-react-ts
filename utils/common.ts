/*
 * @Author: fantiga
 * @Date: 2023-01-16 21:26:57
 * @LastEditTime: 2023-01-22 15:06:20
 * @LastEditors: fantiga
 * @FilePath: /hackernews-list-react-ts/utils/common.ts
 */

import useSWR from "swr";
import { TStory } from "./interface";

export const API = "https://hacker-news.firebaseio.com/v0/";

export const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());

/**
 * @description: Get data asynchronously / 异步获取数据
 * @return {*}
 */
const getStoriesData = async (limit: number): Promise<TStory[]> => {
  const ids = await fetcher(API + "topstories.json?print=pretty");

  return await Promise.all(
    ids.slice(0, limit).map(
      async (id: number): Promise<TStory> => {
        return await fetcher(API + `item/${id}.json?print=pretty`);
      }
    )
  );
};

export const useStories = (count: number) => useSWR('stories', () => getStoriesData(count));
