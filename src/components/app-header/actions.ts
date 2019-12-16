export const CHANGE_SEARCH_QUERY = 'CHANGE_SEARCH_QUERY';

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

export type ISearchAction = IChangeSearchQuery;
