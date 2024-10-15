// utils/getAllPosts.ts

import slugs from '@/posts/slugs.json';
import { BlogPostType } from '@/types/BlogPost';
import { cache } from 'react';
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
        } as BlogPostType;
      } catch (error) {
        console.error(`Error processing post ${slug}:`, error);
        return null;
      }
    })
  );

  return posts.filter(Boolean) as BlogPostType[];
});
