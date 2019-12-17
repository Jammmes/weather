import React from 'react';
import { Button } from '@/components/button';
import { Dispatch } from 'redux';
import { ICity } from './reducer';

import styles from './pages.scss';

import { moveUpCity, moveDownCity, restoreCity, removeCity } from './actions';
import { PageTypes } from '@/app/types';
import { GET_WEATHER_ICON } from '@/api/endpoints';

export const useTable = (list: ICity[], dispatch: Dispatch, pageType: PageTypes) => {

  const dataSource = list.slice()
    .sort((a: ICity, b: ICity) => a.position > b.position ? -1 : 1)
    .filter(city => {
      switch (pageType) {
        case 'DELETED': {
          return city.isDeleted === true;
        }
        case 'ACTIVE': {
          return city.isDeleted === false;
        }
        default:
          return city;
      }
    });

  const columns = [
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
      render: (text: string, record: any) =>
        <Button
          type='link'
          onClick={() => console.log('modal show', record.name)}
        >
          {record.name}
        </Button>,
    },
    {
      title: 'Icon',
      dataIndex: 'icon',
      key: 'icon',
      render: (text: string, record: any) =>
        <img className={styles.icon} src={GET_WEATHER_ICON(record.icon)} alt='icon' />
    },
    {
      title: 'Temperature',
      dataIndex: 'temperature',
      key: 'temperature',
    },
    {
      title: 'Up',
      dataIndex: '',
      key: 'up',
      render: (text: string, record: any) =>
        <Button
          icon='caret-up'
          size='small'
          onClick={() => dispatch(moveUpCity(record.id))}
        />,
    },
    {
      title: 'Down',
      dataIndex: '',
      key: 'down',
      render: (text: string, record: any) =>
        <Button
          icon='caret-down'
          size='small'
          onClick={() => dispatch(moveDownCity(record.id))}
        />,
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'action',
      render: (text: string, record: any) =>
        <Button
          icon={record.isDeleted ? 'select' : 'rest'}
          type={record.isDeleted ? 'primary' : 'danger'}
          size='small'
          onClick={() => record.isDeleted ? dispatch(restoreCity(record.id)) : dispatch(removeCity(record.id))}
        >
          {record.isDeleted ? 'Restore' : 'Remove'}
        </Button>,
    },
  ];

  return {
    dataSource,
    columns,
  };
};
