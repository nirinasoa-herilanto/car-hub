'use client';

import React from 'react';
import Image from 'next/image';
import { styled } from 'styled-components';

import HeroSummary from './HeroSummary';
import HeroImage from './HeroImage';

export type HeroProps = {
  className?: string;
};

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <HeroWrapper className={`hero ${className || ''}`}>
      <HeroSummary />
      <HeroImage imageLink="/hero.png" />
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  &.hero {
    width: 100%;
    height: 100%;
    margin-top: 32px;
    margin-bottom: 32px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (min-width: 992px) {
      margin-top: 0;
      width: 100%;
      height: calc(100vh - 80px);
      max-height: 752px;

      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
    }
  }
`;

export default Hero;
