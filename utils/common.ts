/*
 * @Author: fantiga
 * @Date: 2023-01-16 21:26:57
 * @LastEditTime: 2023-01-29 21:34:29
 * @LastEditors: fantiga
 * @FilePath: /hackernews-list-react-ts/utils/common.ts
 */

export const API = "https://hacker-news.firebaseio.com/v0/";

export const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());
export const PAGE_SIZE = 100;
