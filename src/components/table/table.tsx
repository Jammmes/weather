import React, { FunctionComponent, Component } from 'react';
import { Table as AntTable } from 'antd';
import 'antd/lib/table/style/css';

import styles from './table.scss';

export interface ITableProps {
  dataSource: any;
  columns: any;
  loading: boolean;
}

export const Table: FunctionComponent<ITableProps> = ({
  dataSource,
  columns,
  loading,
}) => {
  return (
    <AntTable
      dataSource={dataSource}
      columns={columns}
      bordered
      pagination={false}
      size='small'
      rowKey={(record: any) => record.id}
      loading={loading}
    />)
    ;
};
