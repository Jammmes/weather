import React, { FunctionComponent } from 'react';

import styles from './content.scss';

export const Content: FunctionComponent<{}> = ({ children }) => {
  return (
    <main className={styles.root}>
      {children}
    </main>
  );
};
