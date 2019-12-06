import React, { FunctionComponent } from 'react';
import { Tabs as AntTabs } from 'antd';
import 'antd/lib/tabs/style/css';

import styles from './tabs.scss';

const { TabPane } = AntTabs;
export interface ITabsProps {
  onChange: () => void;
}

export const Tabs:FunctionComponent<ITabsProps> = ({ onChange }) => {

  return (
    <AntTabs onChange={onChange} type='card'>
      <TabPane tab='Tab 1' key='1'>
        All
      </TabPane>
      <TabPane tab='Tab 2' key='2'>
        Active
      </TabPane>
      <TabPane tab='Tab 3' key='3'>
        Deleted
      </TabPane>
    </AntTabs>
  );
};
