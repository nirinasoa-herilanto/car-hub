'use client';

import Link from 'next/link';
import styled from 'styled-components';

export default function Homepage() {
  return (
    <HomepageWrapper className="homepage">
      <div className="homepage__container">
        <h1>Welcome to the Car hub application</h1>

        <div className="description">
          <p>A project that I saw on JSMastery Youtube Channel.</p>
          <Link href="https://www.youtube.com/watch?v=pUNSHPyVryU" target="_blank">
            Click here
          </Link>
        </div>

        <div className="author">Coded by Nirinasoa Herilanto</div>
      </div>
    </HomepageWrapper>
  );
}

const HomepageWrapper = styled.section`
  &.homepage {
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    .homepage__container {
      width: 75%;
      height: auto;
    }

    .description {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .author {
      font-size: 16px;
      font-weight: bold;
      color: var(--blue-600);
    }
  }
`;
