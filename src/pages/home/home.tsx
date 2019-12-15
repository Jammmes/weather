
import React, { FunctionComponent } from 'react';

import styles from './home.scss';
import { Table } from '@/components/table';
import { useTable } from '../selector';
import { useDispatch } from 'react-redux';

export const mockAllTableData = [
  {
    key: '1',
    city: 'Moscow',
    temperature: 32,
  },
  {
    key: '2',
    city: 'Minsk',
    temperature: 42,
  },
  {
    key: '3',
    city: 'Samara',
    temperature: 21,
  },
]

export const Home: FunctionComponent<{}> = () => {

  const dispatch = useDispatch();
  const { dataSource, columns } = useTable(mockAllTableData, dispatch);

  return <div className={styles.root}>
    <Table columns={columns} dataSource={dataSource} />
  </div>;


};
