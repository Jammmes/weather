import { ADD_CITY, MOVE_UP_CITY, ICitiesAction, MOVE_DOWN_CITY, REMOVE_CITY, RESTORE_CITY } from './actions';

const initState: ICitiesState = {
  list: [],
  isPending: false,
  error: '',
};

export interface ICity {
  id: string;
  name: string;
  temperature: number;
  position: number;
  isDeleted: boolean;
  icon: string;
}

export interface ICitiesState {
  list: ICity[];
  isPending: boolean;
  error: string;
}

export const citiesSelector = (state: { cities: ICitiesState }) => {
  return state.cities;
};

const citiesReducer = (state: any = initState, action: ICitiesAction) => {
  switch (action.type) {
    case ADD_CITY: {
      const { list } = state;
      const { city } = action.payload;
      return { ...state, list: [...list, city] };
    }
    case MOVE_UP_CITY: {
      const { id } = action.payload;
      const { list } = state;
      const newList = list.map((city: ICity) => {
        if (city.id === id) {
          city.position++;
        }
        return city;
      });
      return { ...state, list: [...newList] };
    }
    case MOVE_DOWN_CITY: {
      const { id } = action.payload;
      const { list } = state;
      const newList = list.map((city: ICity) => {
        if (city.id === id) {
          city.position--;
        }
        return city;
      });
      return { ...state, list: [...newList] };
    }
    case REMOVE_CITY: {
      const { id } = action.payload;
      const { list } = state;
      const newList = list.map((city: ICity) => {
        if (city.id === id) {
          city.isDeleted = true;
        }
        return city;
      });
      return { ...state, list: [...newList] };
    }
    case RESTORE_CITY: {
      const { id } = action.payload;
      const { list } = state;
      const newList = list.map((city: ICity) => {
        if (city.id === id) {
          city.isDeleted = false;
        }
        return city;
      });
      return { ...state, list: [...newList] };
    }
    default:
      return state;
  }
};

export const cities = {
  cities: citiesReducer,
};
