/*
 * @Author: fantiga
 * @Date: 2023-01-15 19:33:04
 * @LastEditTime: 2023-01-29 22:34:39
 * @LastEditors: fantiga
 * @FilePath: /hackernews-list-react-ts/components/Header.tsx
 */

import { FC, memo } from "react";
import Head from "next/head";
import { IHeader } from "@utils/interface";

const Header: FC<IHeader> = memo(({
  title = "HackerNews List NextJS/React TS",
  keywords = "NextJS, React, TypeScript, FantiGA",
  description = "Generated by create next app"
}) => {
  return <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    <title>{title}</title>
    <meta name="keywords" content={keywords} />
    <meta name="description" content={description} />
  </Head>;
});

export default Header;
