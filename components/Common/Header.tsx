'use client';

import React from 'react';
import Link from 'next/link';
import { styled } from 'styled-components';

import { Logo, Button } from '@project/components';

export type HeaderProps = {
  className?: string;
};

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <HeaderWrapper className={`header ${className || ''}`}>
      <nav className="fit">
        <Link href="/">
          <Logo imgLink="/logo.svg" />
        </Link>

        <Button className="header__btn" type="button" disabled>
          Sign in
        </Button>
      </nav>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  &.header {
    width: 100%;
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent;

    & nav {
      padding-left: 20px;
      padding-right: 20px;
      width: 100%;
      height: inherit;
      
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .header__btn {
      width: 120px;
      color: var(--blue-600);
      background: var(--white);
    }
  }
`;

export default Header;
