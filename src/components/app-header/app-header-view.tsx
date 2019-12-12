import React, { FunctionComponent } from 'react';
import { Input, PageHeader, Button } from 'antd';
import 'antd/lib/input/style/css';
import 'antd/lib/page-header/style/css';

import styles from './app-header-view.scss';

import { Tabs } from '@/components/tabs';
import { ITab } from '../tabs/tabs';

export interface IAppHeaderViewProps {
  onTabChange: (value: any) => void;
  tabs: ITab[];
}

export const AppHeaderView: FunctionComponent<IAppHeaderViewProps> = ({ onTabChange, tabs }) => {
  return (
    <div className={styles.root}>
      <div className={styles.search}>
        <Input placeholder='input city name' />
        <Button type='primary' icon='search'>Search</Button>
      </div>
      <Tabs onChange={onTabChange} tabs={tabs} />
    </div>
  );
};
