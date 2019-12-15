
import React, { FunctionComponent, useEffect } from 'react';

import styles from './home.scss';
import { Table } from '@/components/table';
import { useTable } from '../selector';
import { useDispatch, useSelector } from 'react-redux';
import { ICity, citiesSelector } from '../reducer';
import { addCity } from '../actions';

export const mockAllTableData = [
  {
    key: '1',
    city: 'Moscow',
    temperature: 32,
    position: 0,
    isDeleted: false,
  },
  {
    key: '2',
    city: 'Minsk',
    temperature: 42,
    position: 0,
    isDeleted: false,
  },
  {
    key: '3',
    city: 'Samara',
    temperature: 21,
    position: 0,
    isDeleted: true,
  },
]

export const Home: FunctionComponent<{}> = () => {

  const dispatch = useDispatch();

  const getPromises = (data: any[]) => {
    return data.map(item => {
      const newCity: ICity = {
        id: item.key,
        name: item.city,
        temperature: item.temperature,
        position: 0,
        isDeleted: false,
      };
      return new Promise((reslove, reject) => {
        setTimeout(() => {
          reslove(newCity);
        }, 100)
      })
    })
  }

  Promise.all(getPromises(mockAllTableData)).then((res) => console.log('---', res));


  // const { cities } = useSelector(citiesSelector);

  // const { dataSource, columns } = useTable(cities, dispatch);

  return <div className={styles.root}>
    {/* <Table columns={columns} dataSource={dataSource} /> */}
    <div>wait</div>
  </div>;


};
