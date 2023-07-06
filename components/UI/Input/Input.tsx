'use client';
import React from 'react';
import style from './Input.module.css';

export type InputProps = {
  className?: string;
} & JSX.IntrinsicElements['input'];

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...rest }, ref) => {
    return <input className={`${style.input} ${className || ''}`} ref={ref} {...rest} />;
  }
);

export default Input;
