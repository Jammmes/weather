import React, { FunctionComponent } from 'react';

import styles from './app-content-view.scss';

import { Tabs } from '@/components/tabs';
import { ITab } from '../tabs/tabs';

export interface IAppContentViewProps {
  onTabChange: (value: any) => void;
  tabs: ITab[];
}

export const AppContentView: FunctionComponent<IAppContentViewProps> = ({ onTabChange, tabs, children }) => {
  return (
    <div className={styles.root}>
      <Tabs onChange={onTabChange} tabs={tabs} />
      <div className={styles.table}>
        {children}
      </div>
    </div>
  );
};
