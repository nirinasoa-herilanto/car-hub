'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { styled } from 'styled-components';

import { manufacturers } from '@project/constants';

import { Input, Button, ComboBox } from '@project/components';

export type CustomSearchFormProps = {
  className?: string;
  onSubmitSearchHandler: ({ make, model }: { make: string; model: string }) => void;
};

/**
 * Use to display Custom search form component on the UI
 * - Use to search car by make and model
 */
const CustomSearchForm: React.FC<CustomSearchFormProps> = ({
  className,
  onSubmitSearchHandler,
}) => {
  const [make, setMake] = useState<string>('');
  const [model, setModel] = useState<string>('');
  const [showComboBox, setShowComboBox] = useState<boolean>(false);

  const makeChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setMake(e.currentTarget.value);
    setShowComboBox(true);
  };

  const modelChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setModel(e.currentTarget.value);
  };

  const updateMakeHandler = (val: string) => {
    setMake(val);
    setShowComboBox(false);
  };

  const submitSearchHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (make.length === 0 && model.length === 0) {
      return;
    }

    onSubmitSearchHandler({ make, model });
    setMake('');
    setModel('');
  };

  return (
    <CustomSearchFormWrapper
      className={`search-form ${className || ''}`}
      onSubmit={submitSearchHandler}
    >
      <div className="search-form__input">
        <div>
          <Image src="/car-logo.svg" alt="car logo" width={42} height={42} />
          <Input
            type="text"
            value={make}
            onChange={makeChangeHandler}
            placeholder="VolksWagen..."
            required
          />
        </div>

        <div>
          <Image src="/model-icon.png" alt="car logo" width={42} height={42} />
          <Input
            type="text"
            value={model}
            onChange={modelChangeHandler}
            placeholder="Tiguan..."
            required
          />
        </div>
      </div>

      {showComboBox && (
        <ComboBox
          className="combo-filter"
          comboValue={make}
          data={manufacturers}
          onPickValue={updateMakeHandler}
        />
      )}

      <Button className="custom-filter__btn" type="submit">
        <span>{'Search'}</span>
        {/* <Image src="/magnifying-glass.svg" alt="car logo" width={42} height={42} /> */}
      </Button>
    </CustomSearchFormWrapper>
  );
};

const CustomSearchFormWrapper = styled.form`
  &.search-form {
    margin-top: 12px;
    margin-bottom: 12px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 12px;

    .combo-filter {
      top: 50px;
      position: absolute;
      z-index: 5;
    }

    & .search-form__input {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    & .search-form__input div {
      padding: 5px;
      display: flex;
      align-items: center;
      border-radius: 50px;
      background: var(--slate-200);
    }

    & .search-form__input input {
      padding: 5px;
      background: transparent;
    }

    .custom-filter__btn {
    }

    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 12px;

      & .search-form__input {
        display: flex;
        flex-direction: row;
        gap: 12px;
      }

      .custom-filter__btn {
        width: 120px;
        height: auto;
      }
    }
  }
`;

export default CustomSearchForm;
