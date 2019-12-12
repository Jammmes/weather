import React, { FunctionComponent } from 'react';
import { Table as AntTable } from 'antd';
import 'antd/lib/table/style/css';

import styles from './table.scss';

export interface ItableProps {
    dataSource: any;
    columns: any;
}

export const Table: FunctionComponent<ItableProps> = ({
    dataSource,
    columns,
}) => {
    return <AntTable dataSource={dataSource} columns={columns} bordered pagination={false} />;
}
