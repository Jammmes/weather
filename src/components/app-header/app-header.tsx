import React, { FunctionComponent } from 'react';

import { AppHeaderView } from './app-header-view';

export const AppHeader: FunctionComponent<{}> = () => {

  const onTabChange = () => {
    console.log('change tab');
  };

  const appHeaderProps = {
    onTabChange,
    tabs: [
      {
        caption: 'All',
        id: '1',
      },
      {
        caption: 'Active',
        id: '2',
      },
      {
        caption: 'Deleted',
        id:'3',
      }],
  };

  return (
    <AppHeaderView  {...appHeaderProps} />
  );
};
