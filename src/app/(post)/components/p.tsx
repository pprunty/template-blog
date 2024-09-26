import { ReactNode } from "react";

interface PProps {
  children: ReactNode;
}

export function P({ children }: PProps) {
  return <p className="my-5 [blockquote_&]:my-2">{children}</p>;
}
