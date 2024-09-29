import { MetadataRoute } from 'next';
import path from 'path';
import fs from 'fs/promises';

const SITE_URL = 'https://template-blog-xi.vercel.app/';

interface BlogMetadata {
  title?: string;
  date?: string;
  image?: string;
  description?: string;
  excerpt?: string;
  type?: string;
  keywords?: string[];
  readingTime?: number;
  views?: number;
}

// Function to fetch all blog posts with their metadata
async function getPosts() {
  const postsDirectory = path.join(process.cwd(), 'src', 'app', 'blog', '(post)');
  const dirEntries = await fs.readdir(postsDirectory, { withFileTypes: true });

  const posts = [];

  for (const entry of dirEntries) {
    if (
      entry.isDirectory() &&
      !['[slug]', 'layout.tsx', 'components'].includes(entry.name)
    ) {
      const slug = entry.name;

      try {
        // Import the MDX file to get its metadata
        const { metadata } = (await import(`./blog/(post)/${slug}/page.mdx`)) as { metadata: BlogMetadata };

        posts.push({
          slug,
          lastModified: metadata.date ? new Date(metadata.date).toISOString() : new Date().toISOString(),
          priority: 0.7,
          changefreq: 'weekly',
          image: metadata.image || null, // Get image if available
          title: metadata.title || 'Untitled Post',
        });
      } catch (error) {
        console.error(`Error importing metadata for post: ${slug}`, error);
      }
    }
  }

  return posts;
}

// Function to generate advanced sitemap XML content
function generateSitemapXml(posts: { slug: string; lastModified: string; priority: number; changefreq: string; image: string | null; title: string }[]) {
  let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

  // Add static pages with priority and changefreq
  const staticPages = [
    { url: SITE_URL, lastModified: new Date().toISOString(), priority: 1.0, changefreq: 'daily' },
    { url: `${SITE_URL}about`, lastModified: new Date().toISOString(), priority: 0.8, changefreq: 'monthly' },
  ];

  staticPages.forEach((page) => {
    sitemapContent += `<url>\n  <loc>${page.url}</loc>\n  <lastmod>${page.lastModified}</lastmod>\n  <priority>${page.priority}</priority>\n  <changefreq>${page.changefreq}</changefreq>\n</url>\n`;
  });

  // Add dynamic blog posts with priority, changefreq, and image support
  posts.forEach((post) => {
    sitemapContent += `<url>\n  <loc>${SITE_URL}blog/${post.slug}</loc>\n  <lastmod>${post.lastModified}</lastmod>\n  <priority>${post.priority}</priority>\n  <changefreq>${post.changefreq}</changefreq>\n`;

    if (post.image) {
      sitemapContent += `  <image:image>\n    <image:loc>${SITE_URL}${post.image}</image:loc>\n    <image:title>${post.title}</image:title>\n  </image:image>\n`;
    }

    sitemapContent += `</url>\n`;
  });

  sitemapContent += '</urlset>';

  return sitemapContent;
}

// Function to generate robots.txt content
function generateRobotsTxt() {
  return `User-agent: *
Allow: /

Host: ${SITE_URL}
Sitemap: ${SITE_URL}sitemap.xml
`;
}

// Write robots.txt to public/robots.txt
async function writeRobotsToPublic(robotsTxt: string) {
  const publicDirectory = path.join(process.cwd(), 'public');
  const robotsPath = path.join(publicDirectory, 'robots.txt');

  try {
    await fs.writeFile(robotsPath, robotsTxt, 'utf8');
    console.log(`Robots.txt written successfully to ${robotsPath}`);
  } catch (error) {
    console.error(`Error writing robots.txt: ${error}`);
  }
}

// Write sitemap to public/sitemap.xml
async function writeSitemapToPublic(sitemapXml: string) {
  const publicDirectory = path.join(process.cwd(), 'public');
  const sitemapPath = path.join(publicDirectory, 'sitemap.xml');

  try {
    await fs.writeFile(sitemapPath, sitemapXml, 'utf8');
    console.log(`Sitemap written successfully to ${sitemapPath}`);
  } catch (error) {
    console.error(`Error writing sitemap: ${error}`);
  }
}

// Sitemap generation function
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();

  const sitemapXml = generateSitemapXml(posts);
  const robotsTxt = generateRobotsTxt();

  // Write the sitemap XML file to the public directory
  await writeSitemapToPublic(sitemapXml);

  // Write the robots.txt file to the public directory
  await writeRobotsToPublic(robotsTxt);

  return posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.lastModified,
    priority: post.priority,
    changefreq: post.changefreq,
  }));
}
