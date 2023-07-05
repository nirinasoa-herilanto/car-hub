import React from 'react';
import styles from './Overlay.module.css';

export type OverlayProps = {
  className?: string;
} & JSX.IntrinsicElements['div'];

const Overlay: React.FC<OverlayProps> = ({ className, ...rest }) => {
  return (
    <div className={`${styles.overlay} ${className || ''}`} {...rest}></div>
  );
};

export default Overlay;
