import { ReactNode } from "react";

interface PProps {
  children: ReactNode;
  className?: string;
}

export function P({ children, className = '' }: PProps) {
  return (
    <p className={`my-5 text-[17px] [blockquote_&]:my-2 ${className}`}>
      {children}
    </p>
  );
}
