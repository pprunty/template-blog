"use client";

import styled from 'styled-components';
import { withHeadingId } from './utils';
import type { ReactNode } from 'react';

// Styled component for H3
const StyledH3 = styled.h3`
  font-weight: bold; /* Equivalent to font-bold */
  font-size: 1.125rem; /* Equivalent to text-lg */
  margin: 2rem 0; /* Equivalent to my-8 */
  position: relative; /* Equivalent to relative */
`;

interface H3Props {
  children?: ReactNode;
}

export function H3({ children }: H3Props) {
  return <StyledH3>{withHeadingId(children)}</StyledH3>;
}
