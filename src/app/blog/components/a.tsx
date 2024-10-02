import Link from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

interface AProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  children?: ReactNode; // Make children optional
  className?: string;
}

export function A({ children, className = "", href = "#", ...props }: AProps) {
  if (href.startsWith("#")) {
    return (
      <a
        href={href}
        className={`border-b text-gray-600 border-gray-300 transition-[border-color] hover:border-gray-600 dark:text-white dark:border-gray-500 dark:hover:border-white ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  } else {
    return (
      <Link
        href={href}
        className={`border-b text-gray-600 border-gray-300 transition-[border-color] hover:border-gray-600 dark:text-white dark:border-gray-500 dark:hover:border-white ${className}`}
        {...props}
      >
        {children}
      </Link>
    );
  }
}
