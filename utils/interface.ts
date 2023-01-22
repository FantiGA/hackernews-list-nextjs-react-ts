/*
 * @Author: fantiga
 * @Date: 2023-01-15 19:54:47
 * @LastEditTime: 2023-01-22 17:44:07
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
  fallback?: any;
  start?: number;
  limit?: number;
}

export type TStory = {
  by?: string;
  descendants?: number;
  id?: number;
  kids?: number[];
  score?: number;
  time?: number;
  title?: string;
  type?: string;
  url?: string;
};
