import { IAddCity, ADD_CITY } from './actions';

const citiesReducer = (state:any, action: IAddCity) => {
  switch (action.type) {
    case ADD_CITY: {
      const { city } = action.payload;
      return city;
    }
    default:
      return state;
  }
};

export const cities = {
  cities: citiesReducer,
};
