// scripts/generatePostsMetadata.js
const fs = require('fs');
const path = require('path');

// Replace the import of formatDate with a local function
function formatDate(dateString) {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

(async () => {
  const postsDirectory = path.join(
    process.cwd(),
    'src',
    'app',
    'blog',
    '(post)'
  );

  const outputFilePath = path.join(process.cwd(), 'postsMetadata.json');

  const dirEntries = fs.readdirSync(postsDirectory, { withFileTypes: true });

  const posts = [];

  for (const entry of dirEntries) {
    if (
      entry.isDirectory() &&
      !['(post)', 'layout.js', 'page.tsx', 'components'].includes(entry.name)
    ) {
      const slug = entry.name;
      const filePath = path.join(postsDirectory, slug, 'page.mdx');

      try {
        const fileContents = fs.readFileSync(filePath, 'utf8');

        // Use regex to extract the metadata object
        const metadata = (await import (`${filePath}`));

        if (!metadata) {
          throw new Error(`Metadata not found in ${filePath}`);
        }

        // Format the date using your existing formatDate function
        const formattedDate = metadata.date ? formatDate(metadata.date) : null;

        posts.push({
          slug,
          title: metadata.title || 'Untitled Post',
          date: formattedDate,
          image: metadata.image || '',
          description: metadata.description || '',
          excerpt: metadata.excerpt || '',
          type: metadata.type || 'article',
          keywords: metadata.keywords || [],
          readingTime: metadata.readingTime || 5,
          // Include other metadata fields as needed
        });
      } catch (error) {
        console.error(`Error reading file ${filePath}:`, error);
      }
    }
  }

  // Write posts data to a JSON file
  fs.writeFileSync(outputFilePath, JSON.stringify(posts, null, 2));
  console.log('Posts metadata generated successfully.');
})();

// Helper function to extract metadata using regex
function extractMetadata(content) {
  // Regex to match 'export const metadata = { ... };'
  const metadataRegex = /export\s+const\s+metadata\s*=\s*({[\s\S]*?});/m;
  const match = content.match(metadataRegex);
  if (match && match[1]) {
    const metadataCode = match[1];
    try {
      // Safely evaluate the metadata object
      const metadata = new Function('return ' + metadataCode)();
      return metadata;
    } catch (error) {
      console.error('Error evaluating metadata:', error);
      return null;
    }
  }
  return null;
}
