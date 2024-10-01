import { cache } from 'react';
import path from 'path';
import fs from 'fs/promises';
import { BlogPostType } from '@/types/BlogPost';
import formatDate from '@/utils/formatDate';

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

export const getAllPosts = cache(async (): Promise<BlogPostType[]> => {
  const postsDirectory = path.join(
    process.cwd(),
    'src',
    'app',
    'blog',
    '[slug]'
  );
  const dirEntries = await fs.readdir(postsDirectory, { withFileTypes: true });

  const postsPromises = dirEntries.map(async (entry) => {
    if (
      entry.isDirectory() &&
      !['[slug]', 'layout.js', 'page.tsx', 'components'].includes(entry.name)
    ) {
      const slug = entry.name;
      const filePath = path.join(postsDirectory, slug, 'page.mdx');

      try {
        const { metadata } = (await import(
          `../app/blog/[slug]/${slug}/page.mdx`
        )) as { metadata: BlogMetadata };

        return {
          slug,
          title: metadata.title || 'Untitled Post',
          date: metadata.date ? formatDate(metadata.date) : null,
          image: metadata.image || '',
          description: metadata.description || '',
          excerpt: metadata.excerpt || '',
          type: metadata.type || 'article',
          keywords: metadata.keywords || [],
          readingTime: metadata.readingTime || 5,
          views: metadata.views || 5,
        } as BlogPostType;
      } catch (error) {
        console.error(`Error reading file ${filePath}:`, error);
        return null;
      }
    }
  });

  const posts = (await Promise.all(postsPromises)).filter(
    Boolean
  ) as BlogPostType[];

  posts.sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;
    return dateB - dateA;
  });

  return posts;
});
