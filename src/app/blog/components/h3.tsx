import { ReactNode } from 'react';
import { withHeadingId } from './utils';

interface HeadingProps {
  children: ReactNode; // Ensures children can be any valid React element
  classname?: string;
}

export function H3({ children, classname = '' }: HeadingProps) {
  return (
    <h3 className={`group font-bold text-lg my-8 relative ${classname}`}>
      {withHeadingId(children)}
    </h3>
  );
}
