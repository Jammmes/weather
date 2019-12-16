import React, { FunctionComponent } from 'react';
import { Input, PageHeader, Button } from 'antd';
import 'antd/lib/input/style/css';
import 'antd/lib/page-header/style/css';

import styles from './app-header-view.scss';

import { Tabs } from '@/components/tabs';
import { ITab } from '../tabs/tabs';

export interface IAppHeaderViewProps {
  onTabChange: (value: any) => void;
  onQueryChange: (value: any) => void;
  onSearch: () => void;
  tabs: ITab[];
}

export const AppHeaderView: FunctionComponent<IAppHeaderViewProps> = ({ onTabChange, onQueryChange, onSearch, tabs }) => {
  return (
    <div className={styles.root}>
      <div className={styles.search}>
        <Input placeholder='input city name' onChange={onQueryChange} onPressEnter={onSearch} />
        <Button type='primary' icon='search' onClick={onSearch}>Search</Button>
      </div>
      <Tabs onChange={onTabChange} tabs={tabs} />
    </div>
  );
};
