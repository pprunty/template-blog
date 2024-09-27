import { cache } from 'react';
import path from 'path';
import fs from 'fs/promises';
import { BlogPostType } from '@/types/BlogPost'; // Make sure BlogPostType matches the structure of your posts
import Link from 'next/link'; // Import Link from next/link
import { Suspense } from "react";

// Define metadata type
interface BlogMetadata {
  title?: string;
  date?: string;
  image?: string;
  description?: string;
  excerpt?: string;
  type?: string;
  tags?: string[];
  readingTime?: number;
}

// Memoize the function to avoid repeated file reads
const getAllPosts = cache(async (): Promise<BlogPostType[]> => {
  const postsDirectory = path.join(process.cwd(), 'src', 'app', 'blog', '(post)');
  const dirEntries = await fs.readdir(postsDirectory, { withFileTypes: true });
  const posts: BlogPostType[] = [];

  for (const entry of dirEntries) {
    if (
      entry.isDirectory() &&
      !['[slug]', 'layout.js', 'page.tsx', 'components'].includes(entry.name)
    ) {
      const slug = entry.name;
      const filePath = path.join(postsDirectory, slug, 'page.mdx');

      try {
        // Type metadata explicitly
        const { metadata } = (await import(`./(post)/${slug}/page.mdx`)) as { metadata: BlogMetadata };

        // Push post data into posts array
        posts.push({
          slug,
          title: metadata.title || 'Untitled Post',
          date: metadata.date || null,
          image: metadata.image || '',
          description: metadata.description || '',
          excerpt: metadata.excerpt || '',
          type: metadata.type || 'article',
          tags: metadata.tags || [],
          readingTime: metadata.readingTime || 5,
        });
      } catch (error) {
        console.error(`Error reading file ${filePath}:`, error);
      }
    }
  }

  // Sort posts by date, ensuring date is properly handled
  posts.sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;
    return dateB - dateA;
  });

  return posts;
});

export default async function PostsPage() {
  const posts = await getAllPosts();

  return (
    <Suspense fallback={null}>
      <div className="font-mono m-auto mb-10 text-sm">
        <ul className="list-none p-0">
          {posts.map((post, index) => {
            const year = post.date ? new Date(post.date).getFullYear() : 'Unknown Year';
            const firstOfYear = index === 0 || year !== new Date(posts[index - 1]?.date || '').getFullYear();
            const lastOfYear = index === posts.length - 1 || year !== new Date(posts[index + 1]?.date || '').getFullYear();

            return (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <span
                    className={`flex transition-[background-color] hover:bg-gray-100 dark:hover:bg-[#242424] active:bg-gray-200 dark:active:bg-[#222] border-y border-gray-200 dark:border-[#313131]
                    ${!firstOfYear ? "border-t-0" : ""}
                    ${lastOfYear ? "border-b-0" : ""}
                    `}
                  >
                    <span
                      className={`py-3 flex grow items-center ${
                        !firstOfYear ? "ml-14" : ""
                      }`}
                    >
                      {firstOfYear && (
                        <span className="w-14 inline-block self-start shrink-0 text-gray-500 px-2 dark:text-gray-500">
                          {year}
                        </span>
                      )}
                      {/* Ensuring title and date are aligned */}
                      <span className="flex grow items-center justify-between">
                        <span className="grow dark:text-gray-100">
                          {post.title}
                        </span>
                        <span className="ml-4 text-gray-500 dark:text-gray-500 px-2 text-xs flex-shrink-0">
                          {post.date ? new Date(post.date).toLocaleDateString() : 'No Date Available'}
                        </span>
                      </span>
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Suspense>
  );
}