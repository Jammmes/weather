import React, { FunctionComponent } from 'react';

import styles from './footer.scss';

export const Footer: FunctionComponent<{}> = ({ children }) => {
  return (
    <footer className={styles.root}>
      {children}
    </footer>
  );
};
