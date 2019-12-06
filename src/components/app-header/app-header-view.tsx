import React, { FunctionComponent } from 'react';
import { Input, PageHeader } from 'antd';
import 'antd/lib/input/style/css';
import 'antd/lib/page-header/style/css';
import { Tabs } from '@/components/tabs';

import styles from './app-header-view.scss';

export interface IAppHeaderViewProps {
  onTabChange: () => void;
}

export const AppHeaderView: FunctionComponent<IAppHeaderViewProps> = ({onTabChange}) => {
  return (
    <div className={styles.root}>
      <PageHeader title='This website provides a information about weather'>
        <Input placeholder='input city name'  />
      </PageHeader>
      <Tabs onChange = {onTabChange}/>
    </div>
  );
};
