export const CHANGE_SEARCH_QUERY = 'CHANGE_SEARCH_QUERY';
export const CLEAR_QUERY = 'CLEAR_QUERY';

export interface IChangeSearchQuery {
  type: typeof CHANGE_SEARCH_QUERY;
  payload: {
    query: string,
  };
}

export const changeSearchString = (query: string): IChangeSearchQuery => {
  return {
    type: CHANGE_SEARCH_QUERY,
    payload: {
      query,
    },
  };
};

export interface IClearQuery {
  type: typeof CLEAR_QUERY;
}

export const clearQuery = (): IClearQuery => {
  return {
    type: CLEAR_QUERY,
  };
};

export type ISearchAction =
IChangeSearchQuery
|IClearQuery;
