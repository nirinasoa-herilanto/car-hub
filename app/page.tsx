'use client';

import styled from 'styled-components';

import { Hero } from '@project/components';

export default function Homepage() {
  return (
    <HomepageWrapper className="homepage">
      <Hero />
    </HomepageWrapper>
  );
}

const HomepageWrapper = styled.section`
  &.homepage {
  }
`;
