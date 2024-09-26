"use client";

import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: var(--bg); /* Use the CSS variable */
  color: var(--fg); /* Use the CSS variable */
  border: 1px solid var(--border-color, #e3e2e0); /* Fallback to default */
  border-radius: 6px; /* Example of hardcoded value */
  padding: 0.5rem 1rem;

  &:hover {
    background-color: var(--hover-bg, #e5e7eb); /* Fallback to default */
  }
`;
