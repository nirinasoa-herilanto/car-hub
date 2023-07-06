'use client';

import React, { useState } from 'react';
import { styled } from 'styled-components';

export type ComboBoxProps = {
  className?: string;
  data: string[];
  comboValue: string;
  onPickValue: (val: string) => void;
};

const ComboBox: React.FC<ComboBoxProps> = ({
  className,
  comboValue,
  data,
  onPickValue,
}) => {
  // const [comboItem, setComboItem] = useState<string>('');

  const pickComboValueHandler = (val: string) => {
    onPickValue(val);
  };

  return (
    <ComboBoxWrapper className={`combo-box ${className || ''}`}>
      <ul>
        {comboValue.length !== 0 &&
          data.map(
            (item) =>
              item.toLowerCase().includes(comboValue.toLowerCase()) && (
                <li key={item} onClick={pickComboValueHandler.bind(null, item)}>
                  {item}
                </li>
              )
          )}
      </ul>
    </ComboBoxWrapper>
  );
};

const ComboBoxWrapper = styled.div`
  &.combo-box {
    & ul {
      width: 262px;
      height: auto;
      max-height: 350px;
      padding: 0;
      overflow-y: auto;
      background: var(--zinc-50);
      box-shadow: 2px 2px 8px rgb(0, 0, 0, 0.4);
    }

    & ul li {
      padding: 20px;
      cursor: pointer;
    }

    & ul li:hover {
      color: var(--white);
      background: var(--blue-600);
    }
  }
`;

export default ComboBox;
