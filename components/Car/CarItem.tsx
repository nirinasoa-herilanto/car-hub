'use client';

import React from 'react';
import Image from 'next/image';
import { styled } from 'styled-components';

import { ICar, calculateCarRent, truncate } from '@project/utils';

import { Button } from '@project/components';

export type CarItemProps = {
  className?: string;
  car: ICar;
};

/**
 * Use to display car item
 */
const CarItem: React.FC<CarItemProps> = ({ className, car }) => {
  return (
    <CarItemWrapper className={`car-item ${className || ''}`}>
      <h2 className="car-item__title">{truncate(`${car.make} ${car.model}`, 18)}</h2>

      <div className="car-item__rent">
        <span className="car-item__rent--unit">{'$'}</span>
        <span className="car-item__rent--value">
          {calculateCarRent(car.city_mpg, car.year)}
        </span>
        <span className="car-item__rent--day">{'/day'}</span>
      </div>

      <div className="car-item__image">
        <Image
          // src={car.image || '/hero.png'} // please uncomment, if you have an access to an car image API
          src={'/hero.png'}
          alt={`${car.make}-${car.model}`}
          style={{ objectFit: 'contain' }}
          fill
        />
      </div>

      <div className="car-icons">
        <div className="car-icons__wheel">
          <Image
            src={'/steering-wheel.svg'}
            alt={`steering-wheel`}
            width={20}
            height={20}
          />
          <span>{car.transmission === 'a' ? 'Automatic' : 'Manual'}</span>
        </div>

        <div className="car-icons__tire">
          <Image src={'/tire.svg'} alt={`tire`} width={20} height={20} />
          <span>{car.drive.toUpperCase()}</span>
        </div>

        <div className="car-icons__gas">
          <Image src={'/gas.svg'} alt={`gas`} width={20} height={20} />
          <span>
            {car.city_mpg}
            {' MPG'}
          </span>
        </div>
      </div>

      <Button className="car-item__actions" type="button" disabled>
        <span>{'View more'}</span>
        <Image src={'/right-arrow.svg'} alt={`gas`} width={24} height={24} />
      </Button>
    </CarItemWrapper>
  );
};

const CarItemWrapper = styled.div`
  &.car-item {
    position: relative;
    transition: ease-in-out 0.5s;

    .car-item__rent {
      top: 38px;
      margin: 20px;
      position: absolute;
    }

    .car-item__rent--unit {
      top: -6px;
      left: -10px;
      position: absolute;
    }
    .car-item__rent--day {
      bottom: 0;
      position: absolute;
    }
    .car-item__rent--value {
      font-size: 32px;
      font-weight: bold;
    }

    .car-item__image {
      width: 100%;
      height: 258px;
      position: relative;
    }

    /* car-icons */
    .car-icons {
      display: flex;
      justify-content: space-between;
    }

    .car-icons div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }

    .car-item__actions {
      display: none;
    }
    .car-item__actions img {
      float: right;
    }
  }
`;

export default CarItem;
