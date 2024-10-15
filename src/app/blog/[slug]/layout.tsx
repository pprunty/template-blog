// src/app/blog/[slug]/layout.tsx

import { getAllPosts } from '@/utils/getAllPosts';
import Header from './header';
import RelatedPosts from '@/components/RelatedPosts';
import { ReactNode } from 'react';
import BottomBar from '@/components/BottomBar';

interface LayoutProps {
  children: ReactNode;
  params: { slug: string };
}

export default async function Layout({ children, params }: LayoutProps) {
  const { slug } = params;
  const posts = await getAllPosts();

  // Find the current post
  const currentPost = posts.find((post) => post.slug === slug);

  // If current post is not found, handle the case (e.g., return 404 page)
  if (!currentPost) {
    return (
      <div>
        <Header currentPost={null} />
        {children}
        <BottomBar />
      </div>
    );
  }

  return (
    <div>
      <Header currentPost={currentPost} />
      {children}
      <BottomBar />
      <RelatedPosts
        currentPostSlug={slug}
        currentPostKeywords={currentPost.keywords}
        posts={posts}
      />
    </div>
  );
}
