'use client';

import React from 'react';
import { styled } from 'styled-components';

import { summary } from './summary.wording';

import { Button } from '@project/components';

export type HeroSummaryProps = {
  className?: string;
};

const HeroSummary: React.FC<HeroSummaryProps> = ({ className }) => {
  return (
    <HeroSummaryWrapper className={`hero-summary ${className || ''}`}>
      <h1>{summary.title}</h1>
      <p>{summary.description}</p>

      <Button className="car-btn" type="button" disabled>
        Explore cars
      </Button>
    </HeroSummaryWrapper>
  );
};

const HeroSummaryWrapper = styled.div`
  &.hero-summary {
    padding-left: 20px;
    padding-right: 20px;

    & h1 {
      font-size: 42px;
    }

    & p {
      font-size: 22px;
      text-align: left;
    }

    .car-btn {
      width: 120px;
    }

    @media (min-width: 992px) {
      & h1 {
        font-size: 48px;
      }
    }
  }
`;

export default HeroSummary;
