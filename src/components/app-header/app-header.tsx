import React, { FunctionComponent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppHeaderView } from './app-header-view';
import { changeSearchString } from './actions';
import { searchSelector } from './reducer';
import { searchCity } from '@/pages/actions';
import { citiesSelector } from '@/pages/reducer';

export const AppHeader: FunctionComponent<{}> = () => {

  const dispatch = useDispatch();
  const stateSearch = useSelector(searchSelector);
  const stateCities = useSelector(citiesSelector);
  const { error } = stateCities;
  const { query } = stateSearch;

  const onQueryChange = useCallback((event) => {
    const { target: { value } } = event;
    dispatch(changeSearchString(value));
  }, [dispatch]);

  const onSearch = useCallback(() => {
    dispatch(searchCity(query));
  }, [dispatch, query])

  const appHeaderProps = {
    error,
    onQueryChange,
    onSearch,
    query,
  };

  return (
    <AppHeaderView  {...appHeaderProps} />
  );
};
