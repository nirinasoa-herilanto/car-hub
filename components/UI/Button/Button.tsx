'use client';

import React from 'react';
import style from './Button.module.css';

export type ButtonProps = {
  className?: string;
  children: React.ReactNode;
} & JSX.IntrinsicElements['button'];

const Button: React.FC<ButtonProps> = ({ className, children, ...rest }) => {
  return (
    <button className={`${style['btn']} ${className || ''} `} {...rest}>
      {children}
    </button>
  );
};

export default Button;
