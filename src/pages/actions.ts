import { ICity } from './reducer';

export const ADD_CITY = 'ADD_CITY';

export interface IAddCity {
  type: typeof ADD_CITY;
  payload: {
    city: ICity,
  };
}

export const addCity = (city: ICity): IAddCity => {
  return {
    type: ADD_CITY,
    payload: {
      city,
    },
  };
};

export type ICityAction = IAddCity;
