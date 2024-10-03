import type { ReactNode } from "react";

export function Blockquote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-5 text-gray-600 dark:text-gray-300 pl-3 border-l-4 dark:border-gray-500 ">
      {children}
    </blockquote>
  );
}
