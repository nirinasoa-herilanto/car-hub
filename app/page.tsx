'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { ICar, fetchCarsApi, generateCarImageUrl } from '@project/utils';

import { Hero, CarLists, Loading } from '@project/components';

export default function Homepage() {
  const [cars, setCars] = useState<ICar[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const displayCarCataloguesMarkup = (): JSX.Element => {
    if (isLoading) {
      return (
        <div className="car-catalogue__loading">
          <Loading />
        </div>
      );
    }

    return <>{cars && <CarLists data={cars} />}</>;
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const data = await fetchCarsApi<ICar[]>({});

      const formatedCarsWithImageData = data.map((car) => {
        const carImage = generateCarImageUrl(car);
        return { ...car, image: carImage };
      });

      setIsLoading(false);
      formatedCarsWithImageData && setCars(formatedCarsWithImageData);
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
  }
`;
