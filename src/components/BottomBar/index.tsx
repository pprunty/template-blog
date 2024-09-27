"use client";

import React from 'react';
import styled from 'styled-components';
import ShareButton from '@/components/ShareButton'; // Assuming ShareButton component is in the same directory
import { useRouter } from 'next/navigation';

const BottomBar = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <BottomBarContainer>
        <BackArrow onClick={handleBack}>&larr; Back</BackArrow>
      <ShareButton />
    </BottomBarContainer>
  );
};

const BackArrow = styled.div`
  align-self: flex-start;
  text-transform: uppercase;
  background: none;
  border: none;
    font-family: monospace; /* Set font-family to monospace */
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  padding-left: 0px;
  &:hover {
    color: #B3B3B3;
    text-decoration: none;
  }

  &:hover {
    text-decoration: none;
    color: #444;
  }
`;

const BottomBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 720px;
  margin-top: 40px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    margin-bottom: 40px;
  }
`;

export default BottomBar;
