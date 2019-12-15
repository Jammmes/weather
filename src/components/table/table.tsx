import React, { FunctionComponent, Component } from 'react';
import { Table as AntTable } from 'antd';
import 'antd/lib/table/style/css';

import styles from './table.scss';

export interface ITableProps {
  dataSource: any;
  columns: any;
}

export const Table: FunctionComponent<ITableProps> = ({
  dataSource,
  columns,
}) => {
  return <AntTable dataSource={dataSource} columns={columns} bordered pagination={false} />;
};
