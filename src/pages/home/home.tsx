
import React, { FunctionComponent, useEffect, useState } from 'react';

import styles from './home.scss';
import { Table } from '@/components/table';
import { useTable } from '../selector';
import { useDispatch, useSelector } from 'react-redux';
import { ICity, citiesSelector } from '../reducer';
import { addCity } from '../actions';
import { isArray } from 'util';

export const mockAllTableData = [
  {
    key: '1',
    name: 'Moscow',
    temperature: 32,
    position: 0,
    isDeleted: false,
  },
  {
    key: '2',
    name: 'New York',
    temperature: 17,
    position: 1,
    isDeleted: false,
  },
];

export const Home: FunctionComponent<{}> = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const getPromises = (data: any[]) => {
      return data.map(city => {
        const newCity: ICity = {
          id: city.key,
          name: city.name,
          temperature: city.temperature,
          position: 0,
          isDeleted: false,
        };
        return new Promise((reslove, reject) => {
          setTimeout(() => {
            reslove(newCity);
          }, 100);
        });
      });
    };

    Promise.all(getPromises(mockAllTableData)).then((res) => {
      if (isArray(res)) {
        res.forEach((item:ICity) => dispatch(addCity(item)));
      }
    });

  }, []);

  const state = useSelector(citiesSelector);
  const { list } = state;
  const { dataSource, columns } = useTable(list, dispatch, 'ACTIVE');

  return <div className={styles.root}>
    <Table columns={columns} dataSource={dataSource} />
  </div>;
};
