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
  const currentPost = posts.find(post => post.slug === slug);

  // If current post is not found, you may want to handle this case
  if (!currentPost) {
    return (
      <div>
        <Header slug={slug} />
        {children}
        <BottomBar />
      </div>
    );
  }

  return (
    <div>
      <Header slug={slug} />
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
