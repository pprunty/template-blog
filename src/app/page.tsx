// src/app/page.tsx
import { BlogPostType } from '@/types/BlogPost';
import BlogPostList from '@/components/BlogPostList';
import { getAllPosts } from '@/utils/getAllPosts';

export const revalidate = 60; // Revalidate the page every 60 seconds

export default async function PostsPage() {
  const posts = await getAllPosts();

  const postsByYear = posts.reduce(
    (acc, post) => {
      const year = post.date
        ? new Date(post.date).getFullYear().toString()
        : 'Unknown Year';
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(post);
      return acc;
    },
    {} as Record<string, BlogPostType[]>,
  );

  return <BlogPostList postsByYear={postsByYear} />;
}
