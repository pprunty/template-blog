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
    urlPattern: /^\/images\/.*\.(?:png|jpg|jpeg|svg|gif|webp|WEBP)$/i,
    handler: 'CacheFirst',
    options: {
      cacheName: 'images',
      expiration: {
        maxEntries: 100, // You may want to increase the max entries since all images are in /images
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
    swcMinify: true,
    scrollRestoration: true,
  },
  headers() {
      return [
        {
          source: "/images/me.WEBP",
          headers: [
            {
              key: "cache-control",
              value: "public, max-age=31536000, immutable",
            },
          ],
        },
      ];
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
