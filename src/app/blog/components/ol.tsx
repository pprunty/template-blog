import { ReactNode } from 'react';

interface OLProps {
  children: ReactNode;
}

export function OL({ children }: OLProps) {
  return <ol className="my-5 list-decimal list-inside">{children}</ol>;
}
