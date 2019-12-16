import { CHANGE_SEARCH_QUERY, ISearchAction } from './actions';

export interface ISearchState {
  query: string;
}

const initState: ISearchState = {
  query: '',
};

export const searchSelector = (state: { search: ISearchState }) => {
  return state.search;
};

const searchReducer = (state: any = initState, action: ISearchAction) => {
  switch (action.type) {
    case CHANGE_SEARCH_QUERY: {
      const { query } = action.payload;
      return { ...state, query };
    }
    default:
      return state;
  }
};

export const search = {
  search: searchReducer,
};
