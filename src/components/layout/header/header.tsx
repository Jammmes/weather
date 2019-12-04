import React, { FunctionComponent } from 'react';

import styles from './header.scss';

export const Header: FunctionComponent<{}> = ({ children }) => {
  return (
    <header className = {styles.root}>
      {children}
    </header>
  );
};
