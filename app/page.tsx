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
  Button,
} from '@project/components';
import { carHubConfig } from '@project/config';

export default function Homepage() {
  const [data, setData] = useState<ICar[]>([]);
  const [carItem, setCarItem] = useState<ICar | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingMoreCar, setIsLoadingMoreCar] = useState<boolean>(false);
  const [limitCarResults, setLimitCarResults] = useState<number>(
    carHubConfig.limitResults
  );

  const [fuelType, setFuelType] = useState<string>('');
  const [year, setYear] = useState<string>('');

  const {
    ui: { showModal },
  } = useAppStore();

  const loadMoreCarHandler = async () => {
    setIsLoadingMoreCar(true);

    await new Promise(function (resolve) {
      setTimeout(resolve, 1500);
    });

    setLimitCarResults((prev) => prev + carHubConfig.limitResults);
    setIsLoadingMoreCar(false);
  };

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
      setData(formatedCarsResults);

      return;
    }

    setIsLoading(true);
    const data = await fetchCarsApi<ICar[]>({
      params: `?model=${model}&make=${make}&limit=50`,
    });

    const formateddata = generateCarsWithImageData(data);

    setIsLoading(false);
    setData(formateddata);
  };

  const submitFilteredFuel = (fuel: string) => {
    setFuelType(fuel);
  };

  const submitFilteredYear = (year: string) => {
    setYear(year);
  };

  /**
   * Catalogue Markup
   */
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
        {data.length !== 0 ? (
          <>
            <CarLists
              data={data.slice(0, limitCarResults)}
              onDisplayCarItem={displayCarItemHandler}
            />

            {data.length > limitCarResults && (
              <div className="load-more">
                {isLoadingMoreCar ? (
                  <Loading />
                ) : (
                  <Button className="load-more__btn" onClick={loadMoreCarHandler}>
                    Show more
                  </Button>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="no-results">
            <span>{'No cars found, feel free to search a new one !!!'}</span>
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
      formatedCarsWithImageData && setData(formatedCarsWithImageData);
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
      height: 250px;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .no-results {
      width: 100%;
      height: 250px;
      padding-left: 20px;
      padding-right: 20px;
    }

    .no-results span {
      font-size: 18px;
      font-weight: bold;
      color: var(--blue-600);
    }

    .load-more {
      margin-top: 32px;
      margin-bottom: 52px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .load-more__btn {
      width: 198px;
      height: 56px;
      font-size: 21px;
      border-radius: 50px;
    }

    @media (min-width: 992px) {
      .car-catogue__header {
        /* padding: 0; */
      }
    }
  }
`;
