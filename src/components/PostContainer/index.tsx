"use client";

import styled from 'styled-components';
import 'highlight.js/styles/atom-one-dark.css';

// Styled component for the content container
export const PostContainer = styled.div`
  line-height: 1.6; // Default value for line height
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 20px;

  pre {
    overflow-x: auto;
    position: relative;
//     margin: 1.5rem 0;

    code {
      font-family: monospace;
      font-size: 15px;
    }
  }
`;
