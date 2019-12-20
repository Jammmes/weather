
import React, { FunctionComponent } from 'react';

import styles from '../pages.scss';

import { Table } from '@/components/table';
import { useTable } from '../selector';
import { useDispatch, useSelector } from 'react-redux';
import { citiesSelector } from '../reducer';

export const All: FunctionComponent<{}> = () => {

  const dispatch = useDispatch();

  const state = useSelector(citiesSelector);
  const { isPending } = state;
  const { dataSource, columns } = useTable(state, dispatch, 'ALL');

  return <div className={styles.root}>
    <Table columns={columns} dataSource={dataSource} loading={isPending} />
  </div>;
};
