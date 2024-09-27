import { cache } from 'react';
import path from 'path';
import fs from 'fs/promises';
import { BlogPostType } from '@/types/BlogPost';
import { Container } from '@/components/Container';
import Link from 'next/link'; // Import Link from next/link

// Memoize the function to avoid repeated file reads
const getAllPosts = cache(async (): Promise<BlogPostType[]> => {
  const postsDirectory = path.join(process.cwd(), 'src', 'app', 'blog', '(post)');
  const dirEntries = await fs.readdir(postsDirectory, { withFileTypes: true });
  const posts: BlogPostType[] = [];
  console.log(dirEntries);
  for (const entry of dirEntries) {
    if (entry.isDirectory() && entry.name !== '[slug]' && entry.name !== 'layout.js' && entry.name !== 'page.tsx' && entry.name !== 'components') {
      const slug = entry.name;
      const filePath = path.join(postsDirectory, slug, 'page.mdx');
      console.log('slug: ' + slug);
      try {
        const { metadata } = await import(`./(post)/${slug}/page.mdx`);
        console.log('metadata: ' + metadata);

        posts.push({
          slug,
          title: metadata.title || 'Untitled Post',
          date: metadata.date || null,
          image: metadata.image,
          description: metadata.description || '',
          excerpt: metadata.excerpt || '',
          type: metadata.type || 'article',
          tags: metadata.tags || [],
          readingTime: metadata.readingTime || 5,
        });
      } catch (error) {
        console.error(`Error reading file ${filePath}:`, error);
      }
    }
  }

  posts.sort((a, b) => {
    const dateA = new Date(a.date || '');
    const dateB = new Date(b.date || '');
    return dateB.getTime() - dateA.getTime();
  });

  return posts;
});

export default async function PostsPage() {
  const posts = await getAllPosts();

  return (
    <Container>
      <div style={{ maxWidth: '720px', margin: '0 auto', marginTop: '40px', marginBottom: '20px' }}>
        <ul style={{ listStyle: 'none', padding: '0' }}>
          {posts.map((post) => (
            <li key={post.slug} style={{ marginBottom: '20px' }}>
              <div>
                {/* Remove <a> and let Link handle the navigation */}
                <Link href={`/blog/${post.slug}`}>
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
                  <p>{post.date ? new Date(post.date).toLocaleDateString() : 'No date available'}</p>
                  {/* Render additional metadata or content as needed */}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
