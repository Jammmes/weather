export const ADD_CITY = 'ADD_CITY';

export interface IAddCity {
  type: typeof ADD_CITY;
  payload: {
    city: string,
  };
}

export const addCity = (city:string):IAddCity => {
  return {
    type: ADD_CITY,
    payload: {
      city,
    },
  };
};

export type ICityAction = IAddCity;
