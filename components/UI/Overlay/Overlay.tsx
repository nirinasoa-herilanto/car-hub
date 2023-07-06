import React from 'react';
import styles from './Overlay.module.css';

export type OverlayProps = {
  className?: string;
} & JSX.IntrinsicElements['div'];

const Overlay = React.forwardRef<HTMLDivElement, OverlayProps>(
  ({ className, ...rest }, ref) => {
    return (
      <div ref={ref} className={`${styles.overlay} ${className || ''}`} {...rest}></div>
    );
  }
);

export default Overlay;
