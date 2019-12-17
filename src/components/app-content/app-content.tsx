import React, { FunctionComponent, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { AppContentView } from './app-content-view';

export const AppContent: FunctionComponent<{}> = ({ children }) => {

  const dispatch = useDispatch();

  const onTabChange = useCallback((activeTab: string) => {
    dispatch(push(`/${activeTab}`));
  }, [dispatch]);

  const appContentProps = {
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
    children,
  };

  return (
    <AppContentView  {...appContentProps} />
  );
};
