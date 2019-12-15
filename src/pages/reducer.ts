import { IAddCity, ADD_CITY } from './actions';

const initState: ICitiesState = {
  cities: [],
  isPending: false,
  error: '',
};

export interface ICity {
  id: string;
  name: string;
  temperature: number;
  position: number;
  isDeleted: boolean;
}

export interface ICitiesState {
  cities: ICity[];
  isPending: boolean;
  error: string;
}

export const citiesSelector = (state: ICitiesState) => {
  return state;
};

const citiesReducer = (state: any = initState, action: IAddCity) => {
  switch (action.type) {
    case ADD_CITY: {
      const { cities } = state;
      const { city } = action.payload;
      return { ...state, cities: [...cities, city] };
    }
    default:
      return state;
  }
};

export const cities = {
  cities: citiesReducer,
};
