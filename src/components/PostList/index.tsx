// src/components/PostList/index.tsx

import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import { BlogPostType } from '@/types/BlogPost';
// import Views from '@/components/Views'; // Import the Views component
import OptimizedImage from '@/components/OptimizedImage';

const MAX_DESCRIPTION_LENGTH = 200;

interface PostListProps {
  posts: BlogPostType[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="mb-2 text-sm">
      <ul className="list-none p-0">
        {posts.map((post) => (
          <li key={post.slug} className="mb-0 sm:mb-4">
            <Link href={`/blog/${post.slug}`} className="no-underline" passHref>
              <span
                className="
                  flex items-center transition-all ease-in-out
                  border-b border-[#333] dark:border-[#fcfcfc] sm:border-2 sm:border-gray-300 dark:sm:border-gray-600
                  sm:hover:border-gray-500 dark:sm:hover:border-gray-400
                  active:opacity-80 active:scale-98
                  py-4 sm:py-4 sm:px-4 sm:pb-4 sm:px-4
                "
              >
                {post.image && (
                <div className="relative w-[113px] h-[113px] sm:w-[120x] sm:h-[120x] overflow-hidden mr-4 flex-shrink-0">
                  <OptimizedImage
                    src={post.image}
                    alt={post.title || 'Blog post image'}
                    sizes="(max-width: 640px) 113px, 120x"
                  />
                </div>
                )}
                <div className="flex flex-col justify-between grow">
                  <span className="text-xl font-semibold">
                    {post.title}
                  </span>
                  {post.keywords && post.keywords.length > 0 && (
                    <div className="mt-2 flex gap-2 flex-wrap">
                      {post.keywords.slice(0, 4).map((tag, index) => (
                        <span
                          key={index}
                          className="text-[11px] border font-mono border-gray-400 text-gray-700 dark:text-gray-300 px-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  {post.description && (
                    <span className="mt-2 text-gray-700 dark:text-gray-300">
                      <p className="line-clamp-4 text-[16px]">
                        {post.description.length > MAX_DESCRIPTION_LENGTH
                          ? `${post.description.substring(0, MAX_DESCRIPTION_LENGTH)}...`
                          : post.description}
                      </p>
                      {post.description.length > MAX_DESCRIPTION_LENGTH && (
                        <span className="inline text-black cursor-pointer hover:underline">
                          See more
                        </span>
                      )}
                    </span>
                  )}
                </div>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
