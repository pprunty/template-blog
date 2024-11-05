// utils/getAllPosts.ts

import slugs from '@/posts/slugs.json';
import { BlogPostType } from '@/types/BlogPost';
import { cache } from 'next/cache';
import { AUTHOR } from '@/config';
import formatDate from './formatDate';

export const getAllPosts = cache(async (): Promise<BlogPostType[]> => {
  const posts = await Promise.all(
    slugs.map(async (slug: string) => {
      try {
        const { metadata } = await import(`@/posts/${slug}/page.mdx`);

        return {
          slug,
          title: metadata.title || 'Untitled Post',
          date: metadata.date ? formatDate(metadata.date) : null,
          author: metadata.author || AUTHOR.name,
          authorUrl: metadata.authorUrl || AUTHOR.url,
          image: metadata.image || '',
          description: metadata.description || '',
          excerpt: metadata.excerpt || '',
          type: metadata.type || 'article',
          keywords: metadata.keywords || [],
          readingTime: metadata.readingTime || 6,
          draft: metadata.draft || false,
        } as BlogPostType;
      } catch (error) {
        console.error(`Error processing post ${slug}:`, error);
        return null;
      }
    }),
  );

  // Filter out posts marked as draft if the environment is production
  const isProduction = process.env.NODE_ENV === 'production';
  const filteredPosts = posts.filter(
    (post) => post && (!isProduction || !post.draft),
  ) as BlogPostType[];

  // Sort the posts by date (latest first)
  return filteredPosts.sort((a, b) => {
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return 0;
  });
});
