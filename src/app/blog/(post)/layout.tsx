import { getAllPosts } from '@/utils/getAllPosts';
import Header from './header';
import RelatedPosts from '@/components/RelatedPosts';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  const posts = await getAllPosts();

  return (
    <div>
      <Header />
      {children}
      <RelatedPosts posts={posts} />
    </div>
  );
}
