import { ICity } from '@/pages/reducer';

export type SortDirection = 'UP' | 'DOWN';

export const getNewSortedCities = (
  cities: ICity[],
  cityId: string,
  direction: SortDirection,
): ICity[] => {

  const currentIdx = cities.findIndex((city: ICity) => city.id === cityId);

  const newSortedCities = cities.slice();

  if (direction === 'UP') {
    if (currentIdx !== 0) {
      newSortedCities.splice(currentIdx - 1, 0, cities[currentIdx]);
      newSortedCities.splice(currentIdx + 1, 1);
    }
  } else {
    if (currentIdx < cities.length) {
      newSortedCities.splice(currentIdx + 2, 0, cities[currentIdx]);
      newSortedCities.splice(currentIdx, 1);
    }
  }
  return newSortedCities;
};
