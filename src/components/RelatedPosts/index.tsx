import { getAllPosts } from '@/utils/getAllPosts';
import PostList from '@/components/PostList';

interface RelatedPostsProps {
  currentPostSlug: string;
  currentPostKeywords: string[];
}

export default async function RelatedPosts({
  currentPostSlug,
  currentPostKeywords,
}: RelatedPostsProps) {
  const posts = await getAllPosts();

  // Exclude the current post
  const otherPosts = posts.filter((post) => post.slug !== currentPostSlug);

  // Find related posts based on shared keywords
  const relatedPosts = otherPosts.filter((post) =>
    post.keywords.some((keyword) => currentPostKeywords.includes(keyword))
  );

  // Limit to 3 related posts
  const topRelatedPosts = relatedPosts.slice(0, 3);

  // Exclude already selected posts to avoid duplicates
  const remainingPosts = otherPosts.filter(
    (post) => !topRelatedPosts.some((related) => related.slug === post.slug)
  );

  // Shuffle the remaining posts to randomize
  const shuffledRemainingPosts = shuffleArray(remainingPosts);

  // Get up to 2 random posts
  const randomPosts = shuffledRemainingPosts.slice(0, 2);

  // Combine related posts and random posts
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