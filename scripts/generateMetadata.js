// scripts/generateMetadata.js
require('@babel/register')({
  extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'],
  ignore: [/node_modules/],
});

const fs = require('fs');
const path = require('path');

const POSTS_DIR = path.join(process.cwd(), 'src', 'app', 'blog', '(post)');

async function generateMetadata() {
  const dirEntries = await fs.promises.readdir(POSTS_DIR, { withFileTypes: true });
  const posts = [];

  for (const entry of dirEntries) {
    if (
      entry.isDirectory() &&
      !['[slug]', 'layout.js', 'page.tsx', 'components'].includes(entry.name)
    ) {
      const slug = entry.name;
      const mdxPath = path.join(POSTS_DIR, slug, 'page.mdx');

      try {
        // Import the MDX file and extract the metadata
        const mdxModule = require(mdxPath);
        const { metadata } = mdxModule;

        posts.push({
          slug,
          title: metadata.title || 'Untitled Post',
          date: metadata.date || null,
          image: metadata.image || '',
          description: metadata.description || '',
          excerpt: metadata.excerpt || '',
          type: metadata.type || 'article',
          keywords: metadata.keywords || [],
          readingTime: metadata.readingTime || 5,
          views: metadata.views || 5,
        });
      } catch (error) {
        console.error(`Error processing ${mdxPath}:`, error);
      }
    }
  }

  // Write metadata to JSON file
  const outputPath = path.join(process.cwd(), 'postsMetadata.json');
  fs.writeFileSync(outputPath, JSON.stringify(posts, null, 2));
}

generateMetadata();
