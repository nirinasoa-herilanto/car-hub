'use client';

import React from 'react';
import styled from 'styled-components';

export type LoadingProps = {
  className?: string;
};

const Loading: React.FC<LoadingProps> = ({ className }) => {
  return <LoadingWrapper className={`loading ${className || ''}`}></LoadingWrapper>;
};

const LoadingWrapper = styled.div`
  &.loading {
    width: 15px;
    height: 15px;
    background: #3b82f6;
    border-radius: 50%;
    box-shadow: 20px 0 #dbeafe, -20px 0 #3b82f6;
    animation: d5 1s infinite linear alternate;

    @keyframes d5 {
      0% {
        box-shadow: 20px 0 #3b82f6, -20px 0 #dbeafe;
        background: #3b82f6;
      }
      33% {
        box-shadow: 20px 0 #3b82f6, -20px 0 #dbeafe;
        background: #dbeafe;
      }
      66% {
        box-shadow: 20px 0 #dbeafe, -20px 0 #3b82f6;
        background: #dbeafe;
      }
    }
  }
`;

export default Loading;
