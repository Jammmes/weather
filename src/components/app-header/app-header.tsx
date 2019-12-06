import React, { FunctionComponent } from 'react';

import { AppHeaderView } from './app-header-view';

export const AppHeader: FunctionComponent<{}> = () => {

  const onTabChange = () => {
    console.log('change tab');
  };

  const appHeaderProps = {
    onTabChange,
  };

  return (
    <AppHeaderView  {...appHeaderProps} />
  );
};
