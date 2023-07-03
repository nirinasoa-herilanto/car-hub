'use client';

import React from 'react';
import Image from 'next/image';
import { styled } from 'styled-components';

export type HeroImageProps = {
  className?: string;
  imageLink: string;
  overlayImageLink?: string;
};

const HeroImage: React.FC<HeroImageProps> = ({
  className,
  imageLink,
  overlayImageLink,
}) => {
  return (
    <HeroImageWrapper className={`hero-image ${className || ''}`}>
      <div className="hero-image__content">
        <Image src={imageLink} alt="hero image" style={{ objectFit: 'contain' }} fill />
      </div>

      <div className="hero-image__overlay">
        <Image
          src={'/hero-bg.png'}
          alt="hero image"
          style={{ objectFit: 'contain' }}
          fill
        />
      </div>
    </HeroImageWrapper>
  );
};

const HeroImageWrapper = styled.div`
  &.hero-image {
    width: 100%;
    height: calc(100vh / 2);

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    overflow: hidden;

    .hero-image__content {
      width: 100%;
      height: 500px;

      position: absolute;
      z-index: 10;
    }

    .hero-image__overlay {
      width: 100%;
      height: inherit;

      position: absolute;
      z-index: 5;
    }

    @media (min-width: 768px) {
      width: 100%;
      height: calc(100vh - 80px);
    }

    @media (min-width: 992px) {
      width: 100%;
      height: calc(100vh - 80px);

      .hero-image__content {
        width: 500px;
        height: 500px;

        position: absolute;
        z-index: 10;
      }

      .hero-image__overlay {
        width: 100%;
        height: inherit;

        position: absolute;
        z-index: 5;
      }
    }
  }
`;

export default HeroImage;
