// src/app/page.tsx
import { BlogPostType } from '@/types/BlogPost';
import BlogPostList from '@/components/BlogPostList';
import { getAllPosts } from '@/utils/getAllPosts';

export default async function PostsPage() {
  const posts = await getAllPosts();

  // Group posts by year
  const postsByYear = Object.values(posts).reduce((acc, post) => {
    const year = post.date ? new Date(post.date).getFullYear().toString() : 'Unknown Year';
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as Record<string, BlogPostType[]>);

  return <BlogPostList postsByYear={postsByYear} />;
}
