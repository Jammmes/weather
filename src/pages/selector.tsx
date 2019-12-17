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
      title: 'Actions',
      dataIndex: '',
      key: 'actions',
      render: (text: string, record: any) =>
        <div className={styles.buttonGroup}>
          <Button
            icon='caret-up'
            size='small'
            onClick={() => dispatch(moveUpCity(record.id))}
            className={styles.buttonItem}
          >
            Up
          </Button>
          <Button
            icon='caret-down'
            size='small'
            onClick={() => dispatch(moveDownCity(record.id))}
            className={styles.buttonItem}
          >
            Down
            </Button>
          <Button
            icon={record.isDeleted ? 'select' : 'rest'}
            type={record.isDeleted ? 'primary' : 'danger'}
            size='small'
            onClick={() => record.isDeleted ? dispatch(restoreCity(record.id)) : dispatch(removeCity(record.id))}
            className={styles.buttonItem}
          >
            {record.isDeleted ? 'Restore' : 'Remove'}
          </Button>
        </div>,
    },
  ];

  return {
    dataSource,
    columns,
  };
};
