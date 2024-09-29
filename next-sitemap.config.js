// next-sitemap.config.js
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://template-blog-xi.vercel.app/', // Replace with your site's URL
  generateRobotsTxt: true, // Automatically generate a robots.txt file
  exclude: ['/admin/*', '/api/*'], // Exclude specific paths if necessary
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  generateIndexSitemap: false, // Disable index sitemap if you want only one sitemap
  // Set to fetch all the blog posts dynamically
  transform: async (config, path) => {
    return {
      loc: path, // The URL of the page
      changefreq: 'daily',
      priority: path.includes('/blog/') ? 1.0 : 0.7, // Blog posts get higher priority
      lastmod: new Date().toISOString(), // The last modified date
    };
  },
};
