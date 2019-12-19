import React, { useState, useCallback } from 'react';
import { Dispatch } from 'redux';

import styles from './pages.scss';

import { ICity } from './reducer';
import { Button } from '@/components/button';
import { moveUpCity, moveDownCity, restoreCity, removeCity, addCitySuccess } from './actions';
import { PageTypes } from '@/app/types';
import { GET_WEATHER_ICON } from '@/api/endpoints';
import { ModalCard } from '@/components/modal-card';
import { ModalConfirm } from '@/components/modal-confirm';

export const useTable = (list: ICity[], dispatch: Dispatch, pageType: PageTypes) => {

  const [isVisible, toggleVisiblity] = useState(false);
  const [currentCity, setCurrentCity] = useState();

  const onCancel = useCallback(() => {
    toggleVisiblity(false);
  }, []);

  const onSave = useCallback((city: ICity) => {
    dispatch(addCitySuccess(city));
    toggleVisiblity(false);
  }, []);

  const showModal = useCallback((city: ICity) => {
    setCurrentCity(city);
    toggleVisiblity(!isVisible);
  }, []);

  const onRestore = useCallback((id:string) => {
    dispatch(restoreCity(id));
  }, [dispatch]);

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
        <>
          <Button
            type='link'
            onClick={() => showModal(record)}
          >
            {record.name}
          </Button>
          {<ModalCard isVisible={isVisible} onCancel={onCancel} onSave={onSave} city={currentCity} />}
        </>,
    },
    {
      title: 'Icon',
      dataIndex: 'icon',
      key: 'icon',
      width: 100,
      render: (text: string, record: any) =>
        <img className={styles.icon} src={GET_WEATHER_ICON(record.icon)} alt='icon' />
    },
    {
      title: 'Temperature',
      dataIndex: 'temperature',
      key: 'temperature',
      width: 100,
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
            onClick={record.isDeleted ? () => onRestore(record.id) :() => ModalConfirm(record, dispatch)}
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
