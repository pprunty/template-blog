"use client";

import styled from 'styled-components';
import { withHeadingId } from './utils';
import type { ReactNode } from 'react';

// Styled-component for H1
const StyledH1 = styled.h1`
  font-size: 1.5rem; /* Tailwind's text-2xl equivalent */
  font-weight: bold; /* Tailwind's font-bold */
  margin-bottom: 0.25rem; /* Tailwind's mb-1 */
`;

interface H1Props {
  children?: ReactNode;
  className?: string;
}

// Refactored H1 component using StyledH1
export function H1({ children, className }: H1Props) {
  return (
    <StyledH1 className={className}>
      {withHeadingId(children)}
    </StyledH1>
  );
}
