import rehypeHighlight from 'rehype-highlight'
import mdx from '@next/mdx';
/** @type {import('next').NextConfig} */

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
    providerImportSource: '@mdx-js/react'
  }
})

const nextConfig = withMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  experimental: {
    images: {
      unoptimized: true
    }
  },
  env: {
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID
  }
})

export default nextConfig;
