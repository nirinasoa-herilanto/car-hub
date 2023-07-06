'use client';

import React from 'react';
import Image from 'next/image';
import { styled } from 'styled-components';

interface ICustomSelectData {
  value: string;
  title: string;
}

export type CustomSelectProps = {
  className?: string;
  data: ICustomSelectData[];
  onSelectChange: (val: string) => void;
};

const CustomSelect: React.FC<CustomSelectProps> = ({
  className,
  data,
  onSelectChange,
}) => {
  const selectChangeHandler = (e: any) => {
    onSelectChange(e.target.value);
  };

  return (
    <CustomSelectWrapper className={`custom-select ${className || ''}`}>
      <select onChange={selectChangeHandler}>
        {data?.map(({ title, value }) => (
          <option key={title} value={value}>
            {title}
          </option>
        ))}
      </select>

      <Image
        src={'/chevron-up-down.svg'}
        alt="chevron"
        width={20}
        height={20}
        sizes="cover"
      />
    </CustomSelectWrapper>
  );
};

const CustomSelectWrapper = styled.div`
  &.custom-select {
    width: 152px;
    height: auto;
    position: relative;

    & img {
      top: 10px;
      right: 4px;
      position: absolute;
    }

    & select {
      width: 152px;
      height: auto;
      border: none;
      outline: none;
      appearance: none;
      padding: 10px;
      color: var(--zinc-800);
      background: var(--white);
      font-size: 18px;
      border-radius: 8px;
      box-shadow: 2px 2px 8px rgb(0, 0, 0, 0.4);
      cursor: pointer;
    }

    & select option {
      border: none;
      outline: none;
      color: var(--zinc-800);
      background: var(--zinc-50);
    }
  }
`;

export default CustomSelect;
