import React, { FunctionComponent } from 'react';
import styles from './app-footer.scss';

export const AppFooter: FunctionComponent<{}> = () => {

  return (
      <footer className={styles.root}>
        <div className={styles.footer}>weather 2019</div>
      </footer>
  );
};
