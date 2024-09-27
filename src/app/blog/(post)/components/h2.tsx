"use client";

import styled from 'styled-components';
import { withHeadingId } from './utils';
import type { ReactNode } from 'react';

// Styled component for H2
const StyledH2 = styled.h2`
  font-weight: bold; /* Equivalent to font-bold */
  font-size: 1.25rem; /* Equivalent to text-xl */
  margin: 2rem 0; /* Equivalent to my-8 */
  position: relative; /* Equivalent to relative */
`;

interface H2Props {
  children?: ReactNode;
}

export function H2({ children }: H2Props) {
  return <StyledH2>{withHeadingId(children)}</StyledH2>;
}
