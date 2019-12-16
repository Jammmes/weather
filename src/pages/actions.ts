import { ICity } from './reducer';
import { GET_WEATHER_BY_CITY_NAME } from '@/api/endpoints';
import { Dispatch } from 'redux';

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

export interface IMoveDownCity {
  type: typeof MOVE_DOWN_CITY;
  payload: {
    id: string,
  };
}

export const moveDownCity = (id:string): IMoveDownCity => {
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

export const moveUpCity = (id:string): IMoveUpCity => {
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

export const removeCity = (id:string): IRemoveCity => {
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

export const restoreCity = (id:string): IRestoreCity => {
  return {
    type: RESTORE_CITY,
    payload: {
      id,
    },
  };
};

function loadCity(name:string) {
  return (dispatch:Dispatch) => fetch(GET_WEATHER_BY_CITY_NAME(name))
    .then(res => res.json())
    .then(
      data => dispatch({ type: 'LOAD_SOME_DATA_SUCCESS', data }),
      err => dispatch({ type: 'LOAD_SOME_DATA_FAILURE', err }),
    );
}

export type ICitiesAction =
  IAddCity
| IMoveDownCity
| IMoveUpCity
| IRemoveCity
| IRestoreCity;
