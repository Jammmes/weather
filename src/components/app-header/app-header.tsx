import React, { FunctionComponent, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import { AppHeaderView } from './app-header-view';

export const AppHeader: FunctionComponent<{}> = () => {

  const dispatch = useDispatch();

  const onTabChange = useCallback((activeTab: string) => {
    dispatch(push(`/${activeTab}`));
  }, [dispatch]);

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
  };

  return (
    <AppHeaderView  {...appHeaderProps} />
  );
};
