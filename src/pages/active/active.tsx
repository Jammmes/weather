import React, { FunctionComponent } from 'react';

import styles from './active.scss';

export const Active: FunctionComponent<{}> = () => {
  return <div className={styles.root}>active</div>;
}
