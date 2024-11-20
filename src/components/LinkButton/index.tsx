import React from 'react';
import Link from 'next/link';

type ArrowButtonProps = {
  url: string;
  className?: string; // Optional className prop
  label?: string | null; // Optional label prop (can be null)
};

const LinkButton: React.FC<ArrowButtonProps> = ({
  url,
  className = '',
  label = null,
}) => {
  return (
    <Link
      href={url}
      className={`
        inline-flex items-center justify-center text-current
        border-2 border-[#000] dark:border-white
        transition-[border-radius, border-color] duration-[300ms] ease-out
        rounded-[0rem] hover:rounded-[1.1rem]
        py-3 px-4
        bg-transparent
        hover:border-[#555]
        whitespace-nowrap // Prevent wrapping of text
        ${className} // Merge external className with internal styles
      `}
    >
      <div className="flex items-center space-x-2">
        {label && (
          <span className="text-sm font-medium text-current">{label}</span>
        )}
        <svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35 32"
          width="18"
          height="18"
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
