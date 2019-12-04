import React, { FunctionComponent } from 'react';

import styles from './layout.scss';

export const Layout:FunctionComponent<{}> = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};
