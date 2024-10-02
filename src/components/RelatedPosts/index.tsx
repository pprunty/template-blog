"use client";

import PostList from '@/components/PostList';
import { BlogPostType } from '@/types/BlogPost';
import { useSelectedLayoutSegments } from "next/navigation";
import { useMemo, useState, useEffect } from 'react';

interface RelatedPostsProps {
  currentPostSlug?: string | null;
  currentPostKeywords?: string[] | null;
  posts: BlogPostType[];
}

export default function RelatedPosts({
  currentPostSlug = null,
  currentPostKeywords = null,
  posts,
}: RelatedPostsProps) {
  const segments = useSelectedLayoutSegments();
  const [slug, setSlug] = useState<string | null>(currentPostSlug);

  // Set slug once on initial mount or when segments change
  useEffect(() => {
    if (!currentPostSlug && segments && segments.length > 0) {
      setSlug(segments[0]);
    }
  }, [currentPostSlug, segments]);

  // Memoize keywords calculation, unconditionally called
  const keywords = useMemo(() => {
    if (!currentPostKeywords) {
      const currentPost = posts.find(post => post.slug === slug);
      return currentPost ? currentPost.keywords || [] : [];
    }
    return currentPostKeywords;
  }, [currentPostKeywords, posts, slug]);

  // Memoize otherPosts and relatedPosts, unconditionally called
  const otherPosts = useMemo(() => {
    return posts.filter(post => post.slug !== slug);
  }, [posts, slug]);

  const relatedPosts = useMemo(() => {
    return otherPosts.filter(post =>
      post.keywords.some(keyword => keywords.includes(keyword))
    ).slice(0, 3); // Limit to a maximum of 3 related posts
  }, [otherPosts, keywords]);

  // Memoize shuffledRemainingPosts, unconditionally called
  const shuffledRemainingPosts = useMemo(() => {
    const remainingPosts = otherPosts.filter(post =>
      !relatedPosts.some(relatedPost => relatedPost.slug === post.slug)
    );
    return shuffleArray(remainingPosts);
  }, [otherPosts, relatedPosts]);

  // Add enough random posts to make up a total of 4 posts
  const randomPosts = shuffledRemainingPosts.slice(0, 4 - relatedPosts.length);

  // Combine related posts and random posts to make exactly 4 posts
  const combinedPosts = [...relatedPosts, ...randomPosts];

  if (!slug || combinedPosts.length === 0) {
    return null; // Return null if no posts found or slug is not ready
  }

  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold mb-4">Recommended For You:</h1>
      <PostList posts={combinedPosts} />
    </div>
  );
}

// Helper function to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
