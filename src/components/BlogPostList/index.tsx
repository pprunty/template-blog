import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPostType } from '@/types/BlogPost';
import Views from '@/components/Views'; // Import the Views component

interface BlogPostListProps {
  postsByYear: Record<string, BlogPostType[]>;
}

const OptimizedImage = React.memo(function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className="w-full h-full object-cover"
    />
  );
});

const BlogPostList: React.FC<BlogPostListProps> = ({ postsByYear }) => {
  const sortedYears = Object.keys(postsByYear)
    .sort((a, b) => {
      if (a === 'Unknown Year') return 1;
      if (b === 'Unknown Year') return -1;
      return parseInt(b) - parseInt(a);
    });

  return (
    <div className="mb-2 text-sm">
      {sortedYears.map((year) => (
        <div key={year} className="mb-2">
          <h1 className="text-xl mb-0 sm:mb-4 sm:mt-0 mt-4 text-primary dark:text-primary-dark font-semibold">
            {year}
          </h1>
          <ul className="list-none p-0">
            {postsByYear[year].map((post) => (
              <li key={post.slug} className="mb-0 sm:mb-4">
                <Link href={`/blog/${post.slug}`} className="no-underline">
<span
  className="
    flex items-center transition-all ease-in-out
    border-b border-[#333333] dark:border-[#fcfcfc]
    sm:border-2 sm:border-gray-200 dark:sm:border-[#333333]   /* Update this */
    sm:hover:border-gray-500 dark:sm:hover:border-gray-400
    active:opacity-80 active:scale-98
    py-4 sm:py-4 sm:px-4 sm:pb-4 sm:px-4
  "
>
                    {post.image && (
                      <div className="flex-shrink-0 w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] overflow-hidden mr-4">
                        <OptimizedImage
                          src={post.image}
                          alt={post.title || 'Blog post image'}
                          width={120}
                          height={120}
                          priority
                        />
                      </div>
                    )}
                    <div className="flex flex-col justify-between grow">
                      <span className="text-xs my-1 text-gray-700 dark:text-gray-300 flex items-center">
                        {post.date} &#8226;&nbsp;
                        <Views id={post.slug} defaultValue={post.views ?? 0} />
                      </span>
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
                        <span className="text-sm mt-2 text-gray-700 dark:text-gray-300">
                          <p className="line-clamp-4">{post.description}</p>
                        </span>
                      )}
                    </div>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default BlogPostList;
