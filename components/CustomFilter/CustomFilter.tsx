'use client';

import React from 'react';
import { styled } from 'styled-components';

import { fuels, yearsOfProduction } from '@project/constants';

import { CustomSearchForm, CustomSelect } from '@project/components';

export type CustomFilterProps = {
  className?: string;
};

const CustomFilter: React.FC<CustomFilterProps> = ({ className }) => {
  const submitSearchHandler = ({ make, model }: { make: string; model: string }) => {
    console.log(make, model);
  };

  return (
    <CustomFilterWrapper className={`custom-filter ${className || ''}`}>
      <CustomSearchForm onSubmitSearchHandler={submitSearchHandler} />

      <div>
        <CustomSelect data={fuels} />
        <CustomSelect data={yearsOfProduction} />
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
