'use client';
import React from 'react';
import style from './CustomInput.module.css';

export type CustomInputProps = {
  className?: string;
} & JSX.IntrinsicElements['input'];

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ className, ...rest }, ref) => {
    return <input className={`${style.input} ${className || ''}`} ref={ref} {...rest} />;
  }
);

CustomInput.displayName = 'CustomInput';

export default CustomInput;
