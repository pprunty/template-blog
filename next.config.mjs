import withPWA from 'next-pwa';
import runtimeCaching from 'next-pwa/cache.js';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
  },
});

// Customize runtime caching for image optimization
const customRuntimeCaching = [
  {
    urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/i,
    handler: 'CacheFirst',
    options: {
      cacheName: 'images',
      expiration: {
        maxEntries: 50, // Limit the number of images to cache
        maxAgeSeconds: 30 * 24 * 60 * 60, // Cache images for 30 days
      },
      cacheableResponse: {
        statuses: [0, 200], // Cache only if the response is successful
      },
    },
  },
];

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV !== 'development',
  },
  experimental: {
    swcMinify: true,
    scrollRestoration: true, // Doesn't work well with scroll-behavior: smooth, remove this in globals.css to enable reliable scrollRestoration
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

const withBoth = (config) =>
  withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching: customRuntimeCaching, // Use the customized caching
    disable: process.env.NODE_ENV === 'development',
  })(withMDX(config));

export default withBoth(nextConfig);
