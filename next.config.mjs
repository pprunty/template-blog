import withPWA from 'next-pwa';
import runtimeCaching from 'next-pwa/cache.js';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import createMDX from '@next/mdx';

// Define the configuration for MDX
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
    urlPattern: /^\/images\/.*\.(?:png|jpg|jpeg|svg|gif|webp|WEBP)$/i,
    handler: 'CacheFirst',
    options: {
      cacheName: 'images',
      expiration: {
        maxEntries: 100,
        maxAgeSeconds: 60 * 60 * 24 * 365, // Cache images for 1 year
      },
      cacheableResponse: {
        statuses: [0, 200],
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
    turbo: true
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

// Export configuration as default
export default withBoth(nextConfig);
