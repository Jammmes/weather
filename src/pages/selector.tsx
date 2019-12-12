import React from 'react';
import { Button } from '@/components/button';
import { Dispatch } from 'redux';
import { addCity } from './actions';


export const useTable = (data: any[], dispatch: Dispatch) => {

  const dataSource = data.map(item => item);

  const columns = [
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
      render: (text: string, record: any) => <Button type='link' onClick={() => dispatch(addCity(record.city))}>{record.city}</Button>,

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
      render: (text: string, record: any) => <Button icon='caret-up' onClick={() => console.log('UP', record.key)} />,
    },
    {
      title: 'Down',
      dataIndex: '',
      key: 'down',
      render: (text: string, record: any) => <Button icon='caret-down' onClick={() => console.log('DOWN', record.key)} />,
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'action',
      render: (text: string, record: any) => <Button icon={+record.key % 2 > 0 ? 'rest' : 'select'} onClick={() => console.log(+record.key % 2 > 0 ? 'Remove' : 'Recover', record.key)} />,
    },
  ];

  return {
    dataSource,
    columns,
  }

}

