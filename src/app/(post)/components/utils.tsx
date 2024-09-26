"use client";

import { Children, isValidElement, ReactNode } from "react";
import styled from "styled-components";

// Styled component for the hash link
const HashLink = styled.a`
  position: absolute;
  left: -2rem;
  padding: 0 0.75rem;
  visibility: hidden;
  font-family: monospace;
  font-weight: normal;
  color: ${(props) => props.theme.textGray400 || '#9CA3AF'};
  transition: color 0.3s;

  &:hover {
    color: ${(props) => props.theme.textGray600 || '#4B5563'};
  }

  /* Show when the parent span is hovered */
  span:hover & {
    visibility: visible;
  }

  /* Dark mode */
  @media (prefers-color-scheme: dark) {
    color: ${(props) => props.theme.darkTextGray500 || '#6B7280'};

    &:hover {
      color: ${(props) => props.theme.darkTextGray400 || '#9CA3AF'};
    }
  }
`;

// Styled component for the hidden anchor (for the heading ID)
const HiddenAnchor = styled.a`
  position: absolute;
  top: -20px;
`;

const HeadingWrapper = styled.span`
  position: relative;
`;

export function withHeadingId(children: ReactNode): ReactNode {
  return Children.map(children, (el) => {
    if (typeof el === "string") {
      const re = /\[#([^\]]+)\]\s*$/m;
      const match = el.match(re);

      if (match && match[1]?.length) {
        const headingId = match[1];
        const textBeforeId = el.substring(0, match.index || 0);

        return (
          <HeadingWrapper>
            <HashLink href={`#${headingId}`}>#</HashLink>
            <HiddenAnchor id={headingId} />
            {textBeforeId}
          </HeadingWrapper>
        );
      }
    }

    // Return the element as is if it's not a string or doesn't match the pattern
    return isValidElement(el) ? el : el;
  });
}
