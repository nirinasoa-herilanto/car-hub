'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';

import {
  CustomSearchCar,
  ICar,
  fetchCarsApi,
  generateCarImageUrl,
  generateCarsWithImageData,
} from '@project/utils';

import { Hero, CarLists, Loading, CustomFilter } from '@project/components';

interface ISearchInputCar {
  make: string;
  model: string;
  year?: string;
  fuel?: string;
}

export default function Homepage() {
  const [carsData, setCarsData] = useState<ICar[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [fuelType, setFuelType] = useState<string>('');
  const [year, setYear] = useState<string>('');

  const submitSearchCarHandler = async ({ make, model }: CustomSearchCar) => {
    if (fuelType.length !== 0 && year.length !== 0) {
      setIsLoading(true);
      const results = await fetchCarsApi<ICar[]>({
        params: `?model=${model}&make=${make}&year=${year}&fuel_type=${fuelType}&limit=50`,
      });

      const formatedCarsResults = generateCarsWithImageData(results);
      console.log('results', formatedCarsResults);

      setIsLoading(false);
      setCarsData(formatedCarsResults);

      return;
    }

    setIsLoading(true);
    const data = await fetchCarsApi<ICar[]>({
      params: `?model=${model}&make=${make}&limit=50`,
    });

    const formatedCarsData = generateCarsWithImageData(data);

    console.log('results', formatedCarsData);
    setIsLoading(false);
    setCarsData(formatedCarsData);
  };

  const submitFilteredFuel = (fuel: string) => {
    setFuelType(fuel);
  };

  const submitFilteredYear = (year: string) => {
    setYear(year);
  };

  const displayCarCataloguesMarkup = (): JSX.Element => {
    if (isLoading) {
      return (
        <div className="car-catalogue__loading">
          <Loading />
        </div>
      );
    }

    return (
      <>
        {carsData.length !== 0 ? (
          <CarLists data={carsData.slice(0, 6)} />
        ) : (
          <div className="no-results">
            <span>{'No cars found !!!'}</span>
          </div>
        )}
      </>
    );
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const data = await fetchCarsApi<ICar[]>({ params: '?model=corolla&limit=50' });

      const formatedCarsWithImageData = generateCarsWithImageData(data);

      setIsLoading(false);
      formatedCarsWithImageData && setCarsData(formatedCarsWithImageData);
    })();
  }, []);

  return (
    <HomepageWrapper className="homepage">
      <Hero />

      <div className="car-catalogue">
        <div className="car-catogue__header">
          <h1>Car catalogue</h1>
          <p>{`Explore out cars you might like`}</p>
        </div>

        <CustomFilter
          onSubmitFilteredfuel={submitFilteredFuel}
          onSubmitFilteredYear={submitFilteredYear}
          onSubmitSearchCar={submitSearchCarHandler}
        />

        {displayCarCataloguesMarkup()}
      </div>
    </HomepageWrapper>
  );
}

const HomepageWrapper = styled.section`
  &.homepage {
    .car-catalogue {
      margin-bottom: 52px;
    }
    .car-catogue__header {
      padding-left: 20px;
      padding-right: 20px;
      margin-bottom: 32px;
    }
    .car-catogue__header p {
      font-size: 20px;
    }

    .car-catalogue__loading {
      width: 100%;
      height: 520px;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .no-results {
      width: 100%;
      height: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .no-results span {
      font-size: 18px;
      font-weight: bold;
      color: var(--blue-600);
    }

    @media (min-width: 992px) {
      .car-catogue__header {
        padding: 0;
      }

      .no-results {
        width: 100%;
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
