'use client';

import React, { useRef, useEffect } from 'react';
import style from './Modal.module.css';
import { lock, unlock, clearBodyLocks } from 'tua-body-scroll-lock';

import ModalContainer from './ModalContainer';
import { Overlay, Portal } from '@project/components';
import { useAppStore } from '@project/store';

export type ModalProps = {
  className?: string;
  children: React.ReactNode;
};

/**
 * Use to create a modal on UI
 */
const Modal: React.FC<ModalProps> = ({ className, children }) => {
  const overlayRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const {
    ui: { displayModalHandler },
  } = useAppStore();

  useEffect(() => {
    if (overlayRef.current) {
      lock(overlayRef.current);
    } else {
      unlock(overlayRef.current);
    }

    return () => {
      clearBodyLocks();
    };
  }, [overlayRef.current]);

  return (
    <Portal markupTo={document.getElementById('modal-root') as HTMLElement}>
      <div className={style['modal']}>
        <ModalContainer className={className || ''}>{children}</ModalContainer>
        <Overlay
          ref={overlayRef}
          className={style['modal__overlay']}
          onClick={displayModalHandler}
        />
      </div>
    </Portal>
  );
};

export default Modal;
