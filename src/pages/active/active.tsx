import React, { FunctionComponent } from 'react';

import styles from '../pages.scss';

import { useDispatch, useSelector } from 'react-redux';
import { citiesSelector } from '../reducer';
import { useTable } from '../selector';
import { Table } from '@/components/table';

export const Active: FunctionComponent<{}> = () => {

  const dispatch = useDispatch();

  const state = useSelector(citiesSelector);
  const { list } = state;
  const { dataSource, columns } = useTable(list, dispatch, 'ACTIVE');

  return <div className={styles.root}>
    <Table columns={columns} dataSource={dataSource} />
  </div>;
}
