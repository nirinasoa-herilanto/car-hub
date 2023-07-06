'use client';

import React from 'react';
import styled from 'styled-components';

import { FaTimes } from 'react-icons/fa';

export type ModalContainerProps = {
  className?: string;
  children: React.ReactNode;
};

const ModalContainer: React.FC<ModalContainerProps> = ({ className, children }) => {
  return (
    <ModalContainerWrapper className={`modal-container ${className || ''}`}>
      <div className="modal-container__content">
        <FaTimes className="modal-icon" />
        <>{children}</>
      </div>
    </ModalContainerWrapper>
  );
};

const ModalContainerWrapper = styled.div`
  &.modal-container {
    top: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 25;

    .modal-container__content {
      width: 80%;
      height: 75%;
      padding: 20px;
      background: var(--white);
      border-radius: 20px;
      position: relative;
      overflow-y: auto;
      z-index: 35;
    }

    .modal-icon {
      top: 20px;
      right: 20px;
      font-size: 24px;
      color: var(--red-600);
      position: absolute;
      cursor: pointer;
    }
  }
`;

export default ModalContainer;
