import { ICar } from '../interface/car.interface';

/**
 * Use to calculate car rent
 * @author JSMastery
 */
export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

/**
 * Use to generate car image
 * @author JSMastery
 */
export const generateCarImageUrl = (car: ICar, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage');

  const { make, year, model = 'corolla' } = car;

  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
};

/**
 * Use to update cars data by adding image link
 */
export const generateCarsWithImageData = (data: ICar[]): ICar[] => {
  return data.map((car) => {
    const carImage = generateCarImageUrl(car);
    return { ...car, image: carImage };
  });
};

/**
 * Use to get a portion of text
 */
export const truncate = (txt: string, nb: number) => {
  return txt.length > nb ? `${txt.slice(0, nb - 1)} ...` : txt;
};
