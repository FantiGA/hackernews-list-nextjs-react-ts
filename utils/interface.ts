/*
 * @Author: fantiga
 * @Date: 2023-01-15 19:54:47
 * @LastEditTime: 2023-01-21 17:31:33
 * @LastEditors: fantiga
 * @FilePath: /hackernews-list-react-ts/utils/interface.ts
 */

export interface IHeader {
  title?: string;
  keywords?: string;
  description?: string;
}

export interface IError {
  message?: string;
}

export interface IList {
  limit: number;
  fallback?: any;
}

export type TStory = {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
};
