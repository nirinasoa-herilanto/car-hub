'use client';

import React from 'react';
import { styled } from 'styled-components';

import { ICar } from '@project/utils';

import { Card, CarItem } from '@project/components';

export type CarListsProps = {
  className?: string;
  data: ICar[];
};

/**
 * Use to display a list of cars
 */
const CarLists: React.FC<CarListsProps> = ({ className, data }) => {
  return (
    <CarListsWrapper className={`car-lists ${className || ''}`}>
      {data?.map((car, index) => (
        <li key={index}>
          <Card className="car-lists__item">
            <CarItem car={car} />
          </Card>
        </li>
      ))}
    </CarListsWrapper>
  );
};

const CarListsWrapper = styled.ul`
  &.car-lists {
    padding-left: 20px;
    padding-right: 20px;
    margin: 0;

    display: grid;
    gap: 20px;

    .car-lists__item {
      padding: 20px;
    }

    .car-lists__item:hover {
      background: var(--white);
      box-shadow: 2px 2px 8px rgb(0, 0, 0, 0.4);
    }

    .car-lists__item:hover .car-icons {
      display: none;
    }
    .car-lists__item:hover .car-item__actions {
      width: 100%;
      height: 56px;
      font-size: 20px;
      display: block;
      border-radius: 50px;
    }

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    @media (min-width: 992px) {
      padding: 0;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
  }
`;

export default CarLists;
