import React, { FunctionComponent } from 'react';
import { Input, Button } from 'antd';
import 'antd/lib/input/style/css';
import 'antd/lib/page-header/style/css';

import styles from './app-header-view.scss';

export interface IAppHeaderViewProps {
  error?: string;
  onQueryChange: (value: any) => void;
  onSearch: () => void;
}

export const AppHeaderView: FunctionComponent<IAppHeaderViewProps> = ({
  error,
  onQueryChange,
  onSearch }) => {
  return (
    <div className={styles.root}>
      <div className={styles.error}>{error}</div>
      <div className={styles.search}>
        <Input placeholder='input city name' onChange={onQueryChange} onPressEnter={onSearch} />
        <Button type='primary' icon='search' onClick={onSearch}>Search</Button>
      </div>
    </div>
  );
};
