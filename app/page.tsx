'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useAppStore } from '@project/store';

import {
  CustomSearchCar,
  ICar,
  fetchCarsApi,
  generateCarsWithImageData,
} from '@project/utils';

import {
  Hero,
  CarLists,
  Loading,
  CustomFilter,
  Modal,
  CarDetails,
} from '@project/components';

export default function Homepage() {
  const [carsData, setCarsData] = useState<ICar[]>([]);
  const [carItem, setCarItem] = useState<ICar | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [fuelType, setFuelType] = useState<string>('');
  const [year, setYear] = useState<string>('');

  const {
    ui: { showModal },
  } = useAppStore();

  const displayCarItemHandler = (car: ICar) => {
    setCarItem(car);
  };

  const submitSearchCarHandler = async ({ make, model }: CustomSearchCar) => {
    if (fuelType.length !== 0 && year.length !== 0) {
      setIsLoading(true);
      const results = await fetchCarsApi<ICar[]>({
        params: `?model=${model}&make=${make}&year=${year}&fuel_type=${fuelType}&limit=50`,
      });

      const formatedCarsResults = generateCarsWithImageData(results);

      setIsLoading(false);
      setCarsData(formatedCarsResults);

      return;
    }

    setIsLoading(true);
    const data = await fetchCarsApi<ICar[]>({
      params: `?model=${model}&make=${make}&limit=50`,
    });

    const formatedCarsData = generateCarsWithImageData(data);

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
          <CarLists
            data={carsData.slice(0, 6)}
            onDisplayCarItem={displayCarItemHandler}
          />
        ) : (
          <div className="no-results">
            <span>{'No cars found !!!'}</span>
          </div>
        )}
      </>
    );
  };

  useEffect(() => {
    if (!showModal) setCarItem(null);
  }, [showModal]);

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

      {showModal && carItem && (
        <Modal>
          <CarDetails car={carItem} />
        </Modal>
      )}
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
