'use client';

import React from 'react';
import { styled } from 'styled-components';

import { Logo } from '@project/components';

export type CarHubProps = {
  className?: string;
  imgLink?: string;
};

/**
 * Use to display CarHub copyrighting on the UI
 */
const CarHub: React.FC<CarHubProps> = ({ className, imgLink }) => {
  return (
    <CarHubWrapper className={`car-hub ${className || ''}`}>
      <Logo className="car-hub__image" imgLink={imgLink || '/logo.svg'} />

      <div>{`Car Hub ${new Date().getFullYear()}`}</div>
      <div>All Rights Reserved &copy;</div>
    </CarHubWrapper>
  );
};

const CarHubWrapper = styled.div`
  &.car-hub {
    .car-hub__image {
      margin-bottom: 12px;
    }

    & div {
      font-size: 16px;
      color: var(--zinc-700);
    }
  }
`;

export default CarHub;
