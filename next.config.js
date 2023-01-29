/*
 * @Author: fantiga
 * @Date: 2023-01-15 16:57:51
 * @LastEditTime: 2023-01-29 23:32:58
 * @LastEditors: fantiga
 * @FilePath: /hackernews-list-react-ts/next.config.js
 */
/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? 'https://fantiga.github.io/hackernews-list-nextjs-react-ts/' : '',
};

module.exports = nextConfig;
