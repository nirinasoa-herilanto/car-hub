'use client';

import React from 'react';
import styled from 'styled-components';

export type ModalContainerProps = {
  className?: string;
  children: React.ReactNode;
};

const ModalContainer: React.FC<ModalContainerProps> = ({ className, children }) => {
  return (
    <ModalContainerWrapper className={`modal ${className || ''}`}>
      <div className="modal__content">{children}</div>
    </ModalContainerWrapper>
  );
};

const ModalContainerWrapper = styled.div`
  &.modal {
    width: 80%;
    height: 75%;
    padding: 20px;
    background: var(--white);
    border-radius: 20px;
    position: relative;
    z-index: 25;
  }
`;

export default ModalContainer;
