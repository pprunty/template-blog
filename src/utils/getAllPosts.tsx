// utils/getAllPosts.ts
import { BlogPostType } from '@/types/BlogPost';
import formatDate from '@/utils/formatDate';
import slugs from '@/posts/slugs.json'; // Import the generated slugs

interface BlogMetadata {
  title?: string;
  date?: string;
  image?: string;
  description?: string;
  excerpt?: string;
  type?: string;
  keywords?: string[];
  readingTime?: number;
}

export const getAllPosts = async (): Promise<BlogPostType[]> => {
  const postsPromises = slugs.map(async (slug: string) => {
    try {
      const { metadata } = (await import(`@/posts/${slug}/page.mdx`)) as {
        metadata: BlogMetadata;
      };

      return {
        slug,
        title: metadata.title || 'Untitled Post',
        date: metadata.date ? formatDate(metadata.date) : null,
        image: metadata.image || '',
        description: metadata.description || '',
        excerpt: metadata.excerpt || '',
        type: metadata.type || 'article',
        keywords: metadata.keywords || [],
        readingTime: metadata.readingTime || 5,
      } as BlogPostType;
    } catch (error) {
      console.error(`Error importing post ${slug}:`, error);
      return null;
    }
  });

  const posts = (await Promise.all(postsPromises)).filter(
    Boolean
  ) as BlogPostType[];

  // Sort posts by date
  posts.sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;
    return dateB - dateA;
  });

  return posts;
};
