"use client";

import PostList from '@/components/PostList';
import { BlogPostType } from '@/types/BlogPost';
import { useSelectedLayoutSegments } from "next/navigation";

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

  // If currentPostSlug is not passed as a prop, use the first segment
  if (!currentPostSlug) {
    if (!segments || segments.length === 0) return <></>;
    currentPostSlug = segments[0];
  }

  // If currentPostKeywords are not provided, find the post that matches the current slug and use its metadata
  if (!currentPostKeywords) {
    const currentPost = posts.find(post => post.slug === currentPostSlug);

    if (currentPost) {
      currentPostKeywords = currentPost.keywords || [];
    } else {
      // If the post is not found, return null or handle accordingly
      return null;
    }
  }

  // Ensure currentPostKeywords is properly defined after the above logic
  if (!currentPostKeywords) return null;

  // Exclude the current post from the list of posts
  const otherPosts = posts.filter((post) => post.slug !== currentPostSlug);

  // Find related posts based on shared keywords
  const relatedPosts = otherPosts.filter((post) =>
    post.keywords.some((keyword) => currentPostKeywords!.includes(keyword))
  );

  // Limit to a maximum of 3 related posts
  const topRelatedPosts = relatedPosts.slice(0, 3);

  // If we have 4 related posts already, no need to add random posts
  if (topRelatedPosts.length === 4) {
    return (
      <div className="mt-8">
        <h1 className="text-2xl font-bold mb-4">Recommended For You:</h1>
        <PostList posts={topRelatedPosts} />
      </div>
    );
  }

  // Find remaining posts to use for random selection (excluding already selected ones)
  const remainingPosts = otherPosts.filter(
    (post) => !topRelatedPosts.some((related) => related.slug === post.slug)
  );

  // Shuffle the remaining posts to randomize
  const shuffledRemainingPosts = shuffleArray(remainingPosts);

  // Add enough random posts to make up a total of 4 posts
  const randomPosts = shuffledRemainingPosts.slice(0, 4 - topRelatedPosts.length);

  // Combine related posts and random posts to make exactly 4 posts
  const combinedPosts = [...topRelatedPosts, ...randomPosts];

  if (combinedPosts.length === 0) {
    return null; // Return null if no posts found
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
