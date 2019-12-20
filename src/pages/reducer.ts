import {
  ADD_CITY_SUCCESS,
  ICitiesAction,
  MOVE_CITY,
  DELETE_CITY,
  RESTORE_CITY,
  SET_PENDING,
  ADD_CITY_ERROR,
} from './actions';

const initState: ICitiesState = {
  all: [],
  active: [],
  deleted: [],
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
  all: ICity[];
  active: ICity[];
  deleted: ICity[];
  isPending: boolean;
  error: string;
}

export const citiesSelector = (state: { cities: ICitiesState }) => {
  return state.cities;
};

const citiesReducer = (state: any = initState, action: ICitiesAction) => {
  switch (action.type) {

    case ADD_CITY_SUCCESS: {
      const { all } = state;
      const { city } = action.payload;
      city.position = all.length;
      const sameCity = all.filter((item: ICity) => item.id === city.id);
      let newList = [];
      // if we have the same, just update it
      if (sameCity.length) {
        newList = all.map((item: ICity) => {
          if (item.id === city.id) {
            item.name = city.name;
            item.temperature = city.temperature;
            item.icon = city.icon;
          }
          return item;
        });
      } else {
        newList = [...all, city];
      }
      const newActive = newList.filter((city: ICity) => city.isDeleted === false);
      return {
        ...state,
        error: '',
        all: newList,
        active: [...newActive],
      };
    }

    case ADD_CITY_ERROR: {
      const { error } = action.payload;
      return { ...state, error };
    }

    case MOVE_CITY: {
      const { newSortedArray, pageType } = action.payload;

      if (pageType === 'ALL') {
        return { ...state, all: [...newSortedArray] };
      }

      return pageType === 'ACTIVE'
        ? { ...state, active: [...newSortedArray] }
        : { ...state, deleted: [...newSortedArray] };
    }

    case DELETE_CITY: {
      const { id } = action.payload;
      const { all } = state;
      const newList = all.map((city: ICity) => {
        if (city.id === id) {
          city.isDeleted = true;
        }
        return city;
      });
      const deletedCity = all.filter((city: ICity) => city.isDeleted === true);
      const activeCity = all.filter((city: ICity) => city.isDeleted === false);
      return {
        ...state,
        all: [...newList],
        active: [...activeCity],
        deleted: [...deletedCity],
      };
    }

    case RESTORE_CITY: {
      const { id } = action.payload;
      const { all } = state;
      const newList = all.map((city: ICity) => {
        if (city.id === id) {
          city.isDeleted = false;
        }
        return city;
      });
      const deletedCity = all.filter((city: ICity) => city.isDeleted === true);
      const activeCity = all.filter((city: ICity) => city.isDeleted === false);
      return {
        ...state,
        all: [...newList],
        active: [...activeCity],
        deleted: [...deletedCity],
      };
    }

    case SET_PENDING: {
      const { switched } = action.payload;
      return { ...state, isPending: switched };
    }

    default:
      return state;
  }
};

export const cities = {
  cities: citiesReducer,
};
