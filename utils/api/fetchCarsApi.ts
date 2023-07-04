import { carHubConfig } from '@project/config';

export type FetchCarsApiParams = {
  params?: string;
};

/**
 * Use to fetch Cars API by API Ninjas, on RapidAPI
 * - endpoint: https://cars-by-api-ninjas.p.rapidapi.com/v1/cars by default "limit=5"
 * - docs: https://api-ninjas.com/api/cars
 * @param {string} params  by default "?model=corolla"
 * @returns array of cars
 */
export const fetchCarsApi = async <T>({ params }: FetchCarsApiParams): Promise<T> => {
  try {
    const response = await fetch(
      `${carHubConfig.carsApiEndpoint}${params || '?model=corolla&limit=6'}`,
      {
        headers: {
          'X-RapidAPI-Key': carHubConfig.rapidApiKey || '',
          'X-RapidAPI-Host':
            carHubConfig.rapidApiHost || 'cars-by-api-ninjas.p.rapidapi.com',
        },
      }
    );

    if (!response.ok) throw new Error('Fetching cars api failed!');

    const data = await response.json();

    return data;
  } catch (error: any) {
    throw new Error(error?.message || 'Something went wrong, please try later!');
  }
};
