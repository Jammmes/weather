import { ICity } from './reducer';
import { GET_WEATHER_BY_CITY_NAME } from '@/api/endpoints';
import { Dispatch } from 'redux';
import axios from 'axios';

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

export const MOVE_DOWN_CITY = 'MOVE_DOWN_CITY';
export const MOVE_UP_CITY = 'MOVE_UP_CITY';
export const REMOVE_CITY = 'REMOVE_CITY';
export const RESTORE_CITY = 'RESTORE_CITY';
export const ADD_CITY_ERROR = 'ADD_CITY_ERROR';

export interface IMoveDownCity {
  type: typeof MOVE_DOWN_CITY;
  payload: {
    id: string,
  };
}

export const moveDownCity = (id: string): IMoveDownCity => {
  return {
    type: MOVE_DOWN_CITY,
    payload: {
      id,
    },
  };
};

export interface IMoveUpCity {
  type: typeof MOVE_UP_CITY;
  payload: {
    id: string,
  };
}

export const moveUpCity = (id: string): IMoveUpCity => {
  return {
    type: MOVE_UP_CITY,
    payload: {
      id,
    },
  };
};

export interface IRemoveCity {
  type: typeof REMOVE_CITY;
  payload: {
    id: string,
  };
}

export const removeCity = (id: string): IRemoveCity => {
  return {
    type: REMOVE_CITY,
    payload: {
      id,
    },
  };
};

export interface IRestoreCity {
  type: typeof RESTORE_CITY;
  payload: {
    id: string,
  };
}

export const restoreCity = (id: string): IRestoreCity => {
  return {
    type: RESTORE_CITY,
    payload: {
      id,
    },
  };
};

export const searchCity = (name: string) => {
  return (dispatch: Dispatch) => axios(GET_WEATHER_BY_CITY_NAME(name))
    .then(res => res.data)
    .then(
      data => {
        const newCity = {
          id: data.id,
          name: data.name,
          temperature: data.main.temp,
          position: 0,
          isDeleted: false,
        };
        dispatch(addCity(newCity));
      },
      err => dispatch(addCityError(err)),
    );
};

export interface IAddCityError {
  type: typeof ADD_CITY_ERROR;
  payload: {
    error: string,
  };
}

export const addCityError = (error: string): IAddCityError => {
  return {
    type: ADD_CITY_ERROR,
    payload: {
      error,
    },
  };
};

export type ICitiesAction =
  IAddCity
  | IMoveDownCity
  | IMoveUpCity
  | IRemoveCity
  | IRestoreCity
  ;
