'use client';

import React from 'react';
import styled from 'styled-components';

import { FaTimes } from 'react-icons/fa';
import { useAppStore } from '@project/store';

export type ModalContainerProps = {
  className?: string;
  children: React.ReactNode;
};

const ModalContainer: React.FC<ModalContainerProps> = ({ className, children }) => {
  const {
    ui: { displayModalHandler },
  } = useAppStore();

  return (
    <ModalContainerWrapper className={`modal-container ${className || ''}`}>
      <div className="modal-container__content">
        <FaTimes className="modal-icon" onClick={displayModalHandler} />
        <>{children}</>
      </div>
    </ModalContainerWrapper>
  );
};

const ModalContainerWrapper = styled.div`
  &.modal-container {
    width: 90%;
    height: 90%;
    background: var(--white);
    border-radius: 20px;
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 35;

    .modal-container__content {
      padding: 20px;
    }

    .modal-icon {
      top: 20px;
      right: 20px;
      padding: 10px;
      font-size: 24px;
      color: var(--red-600);
      position: absolute;
      border-radius: 100%;
      background: var(--white);
      box-shadow: 2px 2px 8px rgb(0, 0, 0, 0.4);
      cursor: pointer;
      z-index: 5;
    }

    @media (min-width: 768px) {
      width: 90%;
      height: 75%;
    }
    @media (min-width: 992px) {
      width: 80%;
      height: 75%;
    }
  }
`;

export default ModalContainer;
