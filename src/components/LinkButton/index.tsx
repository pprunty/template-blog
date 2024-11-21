import React from 'react';
import Link from 'next/link';

type ArrowButtonProps = {
  url: string;
  className?: string; // Optional className prop
  label?: string | null; // Optional label prop (can be null)
  newTab?: boolean; // Optional newTab prop
};

const LinkButton: React.FC<ArrowButtonProps> = ({
  url,
  className = '',
  label = null,
  newTab = false,
}) => {
  return (
    <Link
      href={url}
      className={`
        inline-flex items-center justify-center text-current
        border-2 border-[#000] dark:border-white
        transition-[border-radius, border-color, background-color, transform] duration-[300ms] ease-out
        rounded-[0rem] hover:rounded-[1.1rem] active:rounded-[1.1rem] // Match hover and active corner radius
        py-3 px-4
        bg-transparent hover:bg-[#f0f0f0] dark:hover:bg-[#222] // Add hover background color
        active:bg-[#e0e0e0] dark:active:bg-[#333] // Active background color with easing
        hover:border-[#555] active:border-[#333] // Border color for hover and active
        whitespace-nowrap // Prevent wrapping of text
        ${className} // Merge external className with internal styles
      `}
      target={newTab ? '_blank' : '_self'}
      rel={newTab ? 'noopener noreferrer' : undefined}
    >
      <div className="flex items-center space-x-2">
        {label && (
          <span className="text-sm font-medium text-current">{label}</span>
        )}
        <svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35 32"
          width="16"
          height="16"
          className="text-current"
          aria-label={label || `${url} link`}
          role="link"
        >
          <path
            stroke="currentColor"
            strokeWidth="2"
            d="m18.564 1.257 14.523 14.524-14.524 14.524M.475 15.784h31.747"
          />
        </svg>
      </div>
    </Link>
  );
};

export default LinkButton;
