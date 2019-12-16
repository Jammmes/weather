import React, { FunctionComponent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';

import { AppHeaderView } from './app-header-view';
import { changeSearchString } from './actions';
import { searchSelector } from './reducer';
import { searchCity } from '@/pages/actions';

export const AppHeader: FunctionComponent<{}> = () => {

  const dispatch = useDispatch();
  const state = useSelector(searchSelector);
  const { query } = state;

  const onTabChange = useCallback((activeTab: string) => {
    dispatch(push(`/${activeTab}`));
  }, [dispatch]);

  const onQueryChange = useCallback((event) => {
    const { target: { value } } = event;
    dispatch(changeSearchString(value));
  }, [dispatch]);

  const onSearch = useCallback(() => {
    dispatch(searchCity(query));
  }, [dispatch, query])

  const appHeaderProps = {
    onTabChange,
    tabs: [
      {
        caption: 'All',
        id: 'all',
      },
      {
        caption: 'Active',
        id: 'active',
      },
      {
        caption: 'Deleted',
        id: 'deleted',
      }],
    onQueryChange,
    onSearch,
  };

  return (
    <AppHeaderView  {...appHeaderProps} />
  );
};
