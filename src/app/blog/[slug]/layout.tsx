import { getAllPosts } from '@/utils/getAllPosts';
import Header from './header';
import RelatedPosts from '@/components/RelatedPosts';
import { ReactNode } from 'react';
import BottomBar from '@/components/BottomBar';
// import CommentsSection from '@/modules/comments/templates/CommentsSection';
// import {TableOfContents} from "@/app/blog/components/toc";

type Params = Promise<{ slug: string }>;

interface LayoutProps {
  children: ReactNode;
  params: Params; // Define params as a promise
}

export default async function Layout({ children, params }: LayoutProps) {
  const { slug } = await params; // Await params before accessing slug
  const posts = await getAllPosts();

  console.log('slug = ' + slug);
  // Use the first element of slug array, assuming it's the main slug
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

      {/* to be added in next version <TableOfContents/> */}
      {children}
      <BottomBar />
      {/* to be added in next version <CommentsSection/> */}
      <RelatedPosts
        currentPostSlug={slug}
        currentPostKeywords={currentPost.keywords}
        posts={posts}
      />
    </div>
  );
}
