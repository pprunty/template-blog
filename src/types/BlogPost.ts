// Import or define the BlogPostType that describes the shape of a post
export interface BlogPostType {
  slug: string;
  title: string;
  date: string | null;  // Date can be null or a string
  image: string;
  description: string;
  excerpt: string;
  type: string;
  tags: string[];
  readingTime: number;
}