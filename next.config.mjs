/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa';
import runtimeCaching from 'next-pwa/cache.js';  // Added .js extension
import remarkGfm from 'remark-gfm';              // GitHub flavored markdown
import rehypeHighlight from 'rehype-highlight';  // Syntax highlighting
import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],  // GitHub-flavored Markdown
    rehypePlugins: [rehypeHighlight], // Syntax highlighting
  },
});

const nextConfig = {
  reactStrictMode: true,  // Enable React strict mode for improved error handling
  compiler: {
    styledComponents: true,  // Enable styled-components compiler options
    removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
  },
  experimental: {
    swcMinify: true,
    scrollRestoration: true,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

const withBoth = (config) => withPWA({
  dest: "public",           // Destination directory for the PWA files
  register: true,           // Register the PWA service worker
  skipWaiting: true,        // Skip waiting for service worker activation
  runtimeCaching,           // Add the runtime caching configuration here
  disable: process.env.NODE_ENV === "development",  // Disable PWA in development environment
})(withMDX(config));

export default withBoth(nextConfig);
