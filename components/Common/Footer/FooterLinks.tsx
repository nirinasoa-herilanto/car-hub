'use client';

import React from 'react';
import Link from 'next/link';
import { styled } from 'styled-components';

import { footerLinks } from '@project/constants';

export type FooterNagigationProps = {
  className?: string;
  footerLinks: typeof footerLinks;
};

/**
 * Use to display Footer links
 */
const FooterLinks: React.FC<FooterNagigationProps> = ({ className, footerLinks }) => {
  return (
    <FooterLinksWrapper className={`footer-navs ${className || ''}`}>
      <ul className="footer__links">
        {footerLinks.map(({ title, links }) => (
          <li className="links-item" key={title}>
            <div className="links-item__title">{title}</div>

            <div className="sub-links">
              {links.map(({ title, url }) => (
                <Link key={title} href={url}>
                  {title}
                </Link>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </FooterLinksWrapper>
  );
};

const FooterLinksWrapper = styled.nav`
  &.footer-navs {
    .footer__links {
      display: flex;
      flex-wrap: wrap;
      gap: 52px;
    }

    .links-item__title {
      font-size: 16px;
      /* font-weight: bold; */
    }

    .sub-links {
      margin-top: 12px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .sub-links a {
      color: var(--gray-400);
    }
  }
`;

export default FooterLinks;
