import { cache } from 'react';
import path from 'path';
import fs from 'fs/promises';
import matter from 'gray-matter'; // Library to parse front matter
import { serialize } from 'next-mdx-remote/serialize'; // Import the serialize function
import { BlogPostType } from '@/types/BlogPost';
import formatDate from '@/utils/formatDate';
import { getViewCount } from '@/utils/fetchViewCount';

export const getAllPosts = cache(async (): Promise<Record<string, BlogPostType>> => {
  const postsDirectory = path.join(process.cwd(), 'src', 'posts');
  const fileNames = await fs.readdir(postsDirectory);

  const postsPromises = fileNames.map(async (fileName) => {
    const filePath = path.join(postsDirectory, fileName, 'page.mdx');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const { data, content } = matter(fileContent); // Parse front matter

    const slug = fileName.replace(/\.mdx?$/, '');
    const views = await getViewCount(slug);

    // Serialize the MDX content
    const serializedContent = await serialize(content);

    return {
      slug: slug,
      title: data.title || 'Untitled Post',
      date: data.date ? formatDate(data.date) : null,
      image: data.image || '',
      description: data.description || '',
      excerpt: data.excerpt || '',
      type: data.type || 'article',
      keywords: data.keywords || [],
      readingTime: data.readingTime || 5,
      views: views || 5,
      content: serializedContent, // Assign the serialized content
    } as BlogPostType;
  });

  const postsArray = await Promise.all(postsPromises);

  // Convert the array of posts to a hash map (slug -> post)
  const posts = postsArray.reduce((acc, post) => {
    acc[post.slug] = post;
    return acc;
  }, {} as Record<string, BlogPostType>);

  return posts;
});
