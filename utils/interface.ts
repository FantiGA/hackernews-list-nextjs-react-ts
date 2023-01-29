/*
 * @Author: fantiga
 * @Date: 2023-01-15 19:54:47
 * @LastEditTime: 2023-01-29 22:10:38
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
