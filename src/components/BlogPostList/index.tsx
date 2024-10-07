import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPostType } from '@/types/BlogPost';
// import Views from '@/components/Views'; // Import the Views component

interface BlogPostListProps {
  postsByYear: Record<string, BlogPostType[]>;
}

const OptimizedImage = React.memo(function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean; // Optional prop
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`object-cover w-[${width}px] h-[${height}px]`}
      priority={priority} // Use the priority prop here
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
            {postsByYear[year].map((post, index) => (
              <li key={post.slug} className="mb-0 sm:mb-4">
                {index === 0 ? (
                  // Headline article for the first post
                 <Link href={`/blog/${post.slug}`} className="no-underline" >
                   <div
                     className="
                       transition-all ease-in-out
                       border-b border-[#333333] dark:border-[#fcfcfc]
                       sm:border-2 sm:border-gray-200 dark:sm:border-[#333333]
                       sm:hover:border-gray-500 dark:sm:hover:border-gray-400
                       active:opacity-80 active:scale-98
                       py-4 sm:py-4 sm:px-4
                       relative
                     "
                   >
                     {post.image && (
                       <div className="w-full h-[200px] mt-2 sm:h-[300px] overflow-hidden mb-4">
                         <OptimizedImage
                           src={post.image}
                           alt={post.title || 'Blog post image'}
                           width={1200}
                           height={300}
                           priority
                         />
                       </div>
                     )}
                     <div className="flex flex-col justify-between grow">
                       <span className="text-2xl font-bold mt-2">
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
                           <p className="text-[15px]">{post.description}</p>
                         </span>
                       )}
                     </div>
                   </div>
                 </Link>
                ) : (
                  // Regular list item for other posts
                 <Link href={`/blog/${post.slug}`} className="no-underline" prefetch={false}>
                   <span
                     className="
                       flex items-center transition-all ease-in-out
                       border-b border-[#333333] dark:border-[#fcfcfc]
                       sm:border-2 sm:border-gray-200 dark:sm:border-[#333333]
                       sm:hover:border-gray-500 dark:sm:hover:border-gray-400
                       active:opacity-80 active:scale-98
                       py-4 sm:py-4 sm:px-4
                       relative
                     "
                   >
                     {post.image && (
                       <div className="flex-shrink-0 w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] overflow-hidden mr-4">
                         <OptimizedImage
                           src={post.image}
                           alt={post.title || 'Blog post image'}
                           width={120}
                           height={120}
                         />
                       </div>
                     )}
                     <div className="flex flex-col justify-between grow">
                       {/* Views Component Positioned above the Title on the Left */}
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
                           <p className="text-[15px]">{post.description}</p>
                         </span>
                       )}
                     </div>
                   </span>
                 </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default BlogPostList;
