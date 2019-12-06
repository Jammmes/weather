import React, { FunctionComponent, ReactNode } from 'react';
import { Tabs as AntTabs } from 'antd';
import 'antd/lib/tabs/style/css';

import styles from './tabs.scss';
import { string, number } from 'prop-types';

const { TabPane } = AntTabs;

export interface ITab {
  caption: string;
  id: string;
}
export interface ITabsProps {
  onChange: () => void;
  tabs: ITab[];
  content?: ReactNode[];
}

export const Tabs:FunctionComponent<ITabsProps> = ({ onChange, tabs, content }) => {

  const renderTabs = tabs.map(tab => {
    return <TabPane tab={tab.caption} key={tab.id}>{content}</TabPane>;
  });

  return (
    <AntTabs onChange={onChange} type='card'>
      {renderTabs}
    </AntTabs>
  );
};
