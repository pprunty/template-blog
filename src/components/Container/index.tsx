"use client";

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 660px;
  margin-top: 20px;

  @media(min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 768px) {
    padding: 25px; /* Smaller padding for devices below iPhone 11 size */
  }

  @media (max-width: 375px) {
    padding: 8px; /* Smaller padding for very small devices */
  }
`;