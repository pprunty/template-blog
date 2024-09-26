"use client";

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
//   padding: 18px;
  margin-top: 20px;
  width: 100%;
  max-width: 680px;

  @media(min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 768px) {
    padding: 18px; /* Smaller padding for devices below iPhone 11 size */
  }

  @media (min-width: 375px) {
    padding: 14px; /* Smaller padding for devices below iPhone 11 size */
  }
`;