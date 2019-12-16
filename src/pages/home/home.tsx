
import React, { FunctionComponent, useEffect } from 'react';

import styles from './home.scss';
import { Table } from '@/components/table';
import { useTable } from '../selector';
import { useDispatch, useSelector } from 'react-redux';
import { citiesSelector } from '../reducer';

export const Home: FunctionComponent<{}> = () => {

  const dispatch = useDispatch();

  const state = useSelector(citiesSelector);
  const { list } = state;
  const { dataSource, columns } = useTable(list, dispatch, 'ALL');

  return <div className={styles.root}>
    <Table columns={columns} dataSource={dataSource} />
  </div>;
};
