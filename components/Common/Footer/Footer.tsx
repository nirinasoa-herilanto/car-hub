'use client';

import React from 'react';
import Link from 'next/link';
import { styled } from 'styled-components';

import { footerLinks } from '@project/constants';

import FooterLinks from './FooterLinks';
import { CarHub } from '@project/components';

export type FooterProps = {
  className?: string;
};

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <FooterWrapper className={`footer ${className || ''}`}>
      <div className="border" />
      <div className="fit bloc-one">
        <CarHub className="bloc-one__image" />
        <FooterLinks footerLinks={footerLinks} />
      </div>

      <div className="border" />
      <div className="fit bloc-two">
        <div>{`@${new Date().getFullYear()} CarHub. All rights reserved`}</div>

        <nav>
          <ul className="bloc-two__links">
            <li>
              <Link href="/">Privacy & Policy</Link>
            </li>
            <li>
              <Link href="/">Terms & Condition</Link>
            </li>
          </ul>
        </nav>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  &.footer {
    width: 100%;
    height: auto;

    .border {
      border-top: 1px solid #9ca3af;
    }

    /* footer bloc one styles */
    .bloc-one {
      margin-top: 32px;
      margin-bottom: 52px;
      padding-left: 20px;
      padding-right: 20px;

      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 20px;
    }
    .bloc-one ul {
      padding: 0;
    }

    /* footer bloc two styles */
    .bloc-two {
      margin-top: 32px;
      margin-bottom: 32px;
      padding-left: 20px;
      padding-right: 20px;

      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: 20px;
    }

    .bloc-two div {
      font-size: 16px;
    }
    .bloc-two ul {
      padding: 0;
    }

    .bloc-two__links {
      margin: 0;
      display: flex;
      gap: 20px;
    }
    .bloc-two__links a {
      color: var(--gray-400);
    }

    @media (min-width: 768px) {
      .bloc-two {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 20px;
      }
    }
  }
`;

export default Footer;
