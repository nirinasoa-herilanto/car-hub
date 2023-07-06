'use client';

import React from 'react';
import Image from 'next/image';
import { styled } from 'styled-components';

import { ICar } from '@project/utils';

export type CarDetailsProps = {
  className?: string;
  car: ICar;
};

/**
 * Use to display car details
 * @todo refactor later
 */
const CarDetails: React.FC<CarDetailsProps> = ({ className, car }) => {
  return (
    <CarDetailsWrapper className={`car-details ${className || ''}`}>
      <div className="car-details__hero--img">
        <div className="car-details__image">
          <Image
            // src={car.image || '/hero.png'} // please uncomment, if you have an access to an car image API
            src={'/hero.png'}
            alt={`${car.make}-${car.model}`}
            style={{ objectFit: 'contain' }}
            fill
          />
        </div>
        <div className="car-details__overlay">
          <Image
            // src={car.image || '/hero.png'} // please uncomment, if you have an access to an car image API
            src={'/pattern.png'}
            alt={`${car.make}-${car.model}`}
            width={1000}
            height={1000}
            sizes="cover"
          />
        </div>
      </div>

      {/* Display car image with angle */}
      <ul className="car-details__images">
        <div className="car-details__image">
          <Image
            // src={car.image || '/hero.png'} // please uncomment, if you have an access to an car image API
            src={'/hero.png'}
            alt={`${car.make}-${car.model}`}
            style={{ objectFit: 'contain' }}
            fill
          />
        </div>
        <div className="car-details__image">
          <Image
            // src={car.image || '/hero.png'} // please uncomment, if you have an access to an car image API
            src={'/hero.png'}
            alt={`${car.make}-${car.model}`}
            style={{ objectFit: 'contain' }}
            fill
          />
        </div>
        <div className="car-details__image">
          <Image
            // src={car.image || '/hero.png'} // please uncomment, if you have an access to an car image API
            src={'/hero.png'}
            alt={`${car.make}-${car.model}`}
            style={{ objectFit: 'contain' }}
            fill
          />
        </div>
      </ul>

      <h1>{`${car.make} ${car.model}`}</h1>

      <ul>
        {Object.entries(car)
          .filter((item) => item[0] !== 'image')
          .map(([key, value]) => {
            if (key === 'transmission') {
              return (
                <li key={key}>
                  <span className="car-details__key">{key.replace('_', ' ')}</span>
                  <span className="car-detailts__value">
                    {value === 'a' ? 'Automatic' : 'Manual'}
                  </span>
                </li>
              );
            }

            return (
              <li key={key}>
                <span className="car-details__key">{key.replace('_', ' ')}</span>
                <span className="car-detailts__value">{value}</span>
              </li>
            );
          })}
      </ul>
    </CarDetailsWrapper>
  );
};

const CarDetailsWrapper = styled.div`
  &.car-details {
    .car-details__hero--img {
      width: 100%;
      height: 258px;
      position: relative;
      border-radius: 38px;
      overflow: hidden;
    }
    .car-details__image {
      width: 100%;
      height: 258px;
      position: relative;
    }

    .car-details__overlay {
      top: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
    }

    .car-details__images {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }
    .car-details__images div {
      width: 100%;
      height: 148px;
      padding: 5px;
      position: relative;
      border-radius: 10px;
      background: var(--slate-200);
    }

    & ul {
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    & ul li {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    & ul li span {
      font-size: 18px;
    }

    .car-details__key {
      color: var(--gray-400);
    }

    .car-details__key::first-letter {
      text-transform: uppercase;
    }

    .car-detailts__value {
      font-weight: bold;
    }

    @media (min-width: 768px) {
      .car-details__images {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;
      }
    }
  }
`;

export default CarDetails;
