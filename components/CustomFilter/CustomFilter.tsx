'use client';

import React from 'react';
import { styled } from 'styled-components';

import { fuels, yearsOfProduction } from '@project/constants';

import { CustomSearchCar } from '@project/utils';

import { CustomSearchForm, CustomSelect } from '@project/components';

export type CustomFilterProps = {
  className?: string;
  onSubmitSearchCar: (data: CustomSearchCar) => void;
  onSubmitFilteredfuel?: (fuel: string) => void;
  onSubmitFilteredYear?: (year: string) => void;
};

const CustomFilter: React.FC<CustomFilterProps> = ({
  className,
  onSubmitFilteredfuel = (fuel: string) => {},
  onSubmitFilteredYear = (year: string) => {},
  onSubmitSearchCar,
}) => {
  const submitSearchCarHandler = (data: CustomSearchCar) => {
    onSubmitSearchCar(data);
  };

  const submitSelectFuelsHandler = (fuel: string) => {
    onSubmitFilteredfuel(fuel);
  };

  const submitSelectYearsHandler = (year: string) => {
    onSubmitFilteredYear(year);
  };

  return (
    <CustomFilterWrapper className={`custom-filter ${className || ''}`}>
      <CustomSearchForm onSubmitSearchHandler={submitSearchCarHandler} />

      <div>
        <CustomSelect data={fuels} onSelectChange={submitSelectFuelsHandler} />
        <CustomSelect
          data={yearsOfProduction}
          onSelectChange={submitSelectYearsHandler}
        />
      </div>
    </CustomFilterWrapper>
  );
};

const CustomFilterWrapper = styled.div`
  &.custom-filter {
    margin-bottom: 52px;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & div {
      display: flex;
      gap: 12px;
    }

    @media (min-width: 992px) {
      padding: 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
    }
  }
`;

export default CustomFilter;
