import React, { FunctionComponent } from 'react';
import { Input, PageHeader } from 'antd';
import 'antd/lib/input/style/css';
import 'antd/lib/page-header/style/css';

import styles from './app-header-view.scss';

export const AppHeaderView: FunctionComponent<{}> = () => {
  return (
    <div className={styles.root}>
      <PageHeader title='This website provides a information about weather'>
        <Input placeholder='input city name'  />
      </PageHeader>
    </div>
  );
};
