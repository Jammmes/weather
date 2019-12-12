import React, { FunctionComponent } from 'react';

import styles from './home.scss';
import { Table } from '@/components/table';
// import { useTable } from '../selector';
// import { useDispatch } from 'react-redux';
import { Button } from '@/components/button';

// export const mockAllTableData = [
//   {
//     key: '1',
//     city: 'Moscow',
//     temperature: 32,
//   },
//   {
//     key: '2',
//     city: 'Minsk',
//     temperature: 42,
//   },
//   {
//     key: '3',
//     city: 'Samara',
//     temperature: 21,
//   },
// ]



export const Home: FunctionComponent<{}> = () => {

  // const dispatch = useDispatch();
  // const { dataSource, columns } = useTable(dispatch);

  const dataSource = [
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

  const columns = [
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
      render: (text: string, record: any) => <Button type='link' onClick={() => console.log((record.city))}>{record.city}</Button>,

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

  return <div className={styles.root}>
    <Table dataSource={dataSource} columns={columns} />
  </div>;
};
