'use client';

import React from 'react';
import Image from 'next/image';
import { styled } from 'styled-components';

export type LogoProps = {
  className?: string;
  imgLink: string;
};

/**
 * Use to display Logo image
 */
const Logo: React.FC<LogoProps> = ({ className, imgLink }) => {
  return (
    <LogoWrapper className={`logo-img ${className || ''}`}>
      <Image src={imgLink} alt="Car hub" width={118} height={18} />
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  &.logo-img {
  }
`;

export default Logo;
