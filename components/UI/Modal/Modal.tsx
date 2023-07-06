'use client';

import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import style from './Modal.module.css';
import {
  enableBodyScroll,
  disableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

import ModalContainer from './ModalContainer';
import { Overlay } from '@project/components';

export type ModalProps = {
  className?: string;
  children: React.ReactNode;
};

/**
 * Use to create a modal on UI
 */
const Modal: React.FC<ModalProps> = ({ className, children }) => {
  const modalRootRef = useRef<HTMLElement | null>(null);
  const overlayRootRef = useRef<HTMLElement | null>(null);

  const overlayRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    overlayRootRef.current = document.getElementById('overlay-root') as HTMLElement;

    if (overlayRootRef.current && overlayRef.current) {
      disableBodyScroll(overlayRef.current);
    } else {
      enableBodyScroll(overlayRef.current);
    }

    return () => {
      overlayRootRef.current = null;
      clearAllBodyScrollLocks();
    };
  }, [overlayRootRef.current]);

  useEffect(() => {
    modalRootRef.current = document.getElementById('modal-root') as HTMLElement;

    return () => {
      modalRootRef.current = null;
    };
  }, [modalRootRef.current]);

  return (
    <React.Fragment>
      {modalRootRef.current &&
        ReactDOM.createPortal(
          <ModalContainer className={className || ''}>{children}</ModalContainer>,
          modalRootRef.current
        )}

      {overlayRootRef.current &&
        ReactDOM.createPortal(
          <Overlay ref={overlayRef} className={style['modal__overlay']} />,
          overlayRootRef.current
        )}
    </React.Fragment>
  );
};

export default Modal;
