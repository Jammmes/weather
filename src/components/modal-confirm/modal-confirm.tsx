import React, { FunctionComponent, useState, useCallback, useEffect } from 'react';
import { Modal } from 'antd';
import 'antd/lib/modal/style/css';
import 'antd/lib/input/style/css';
import { ICity } from '@/pages/reducer';
import { Dispatch } from 'redux';
import { removeCity } from '@/pages/actions';

const { confirm } = Modal;

export const ModalConfirm = (city:ICity, dispatch:Dispatch) => {
  const onCancel =  () => false;

  return confirm({
    title: `Are you sure delete the city ${city.name} ?`,
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk () {
      dispatch(removeCity(city.id));
    },
    onCancel,
  });
};
