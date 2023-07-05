'use client';

import React from 'react';
import style from './Modal.module.css';

import ModalContainer from './ModalContainer';
import { Portal, Overlay } from '@project/components';

export type ModalProps = {
  className?: string;
  children: React.ReactNode;
};

const modalRoot = document.getElementById('modal-root') as HTMLElement;

const Modal: React.FC<ModalProps> = ({ className, children }) => {
  return (
    <Portal markupTo={modalRoot}>
      <React.Fragment>
        <ModalContainer className={className || ''}>{children}</ModalContainer>
        <Overlay className={style['modal__overlay']} />
      </React.Fragment>
    </Portal>
  );
};

export default Modal;
