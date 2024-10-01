"use client";

import styled from 'styled-components';
import YT, { YouTubeProps } from 'react-youtube'; // Import YouTubeProps from react-youtube

// Styled component for the YouTube container
const StyledYouTubeContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 1.25rem 0; /* Equivalent to Tailwind's my-5 */
  position: relative;
  overflow: hidden;
  padding-top: 56.25%; /* Aspect ratio 16:9 (9/16 = 0.5625 or 56.25%) */

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

// YouTube component with proper typing
export function YouTube(props: YouTubeProps) {
  return (
    <StyledYouTubeContainer>
      <YT {...props} />
    </StyledYouTubeContainer>
  );
}
