/*
 * @Author: fantiga
 * @Date: 2023-01-15 16:57:51
 * @LastEditTime: 2023-01-29 23:48:57
 * @LastEditors: fantiga
 * @FilePath: /hackernews-list-react-ts/next.config.js
 */
/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? './' : '',
};

module.exports = nextConfig;
