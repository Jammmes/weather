import React, { FunctionComponent, useState, useCallback, useEffect } from 'react';
import { Modal, Input } from 'antd';
import 'antd/lib/modal/style/css';
import 'antd/lib/input/style/css';

import styles from './modal-card.scss';

import { ICity } from '@/pages/reducer';
import { GET_WEATHER_ICON } from '@/api/endpoints';
import { Button } from '../button';

export interface IModalCardProps {
  isVisible: boolean;
  onCancel: () => void;
  onSave: (value: any) => void;
  city: ICity;

}

export const ModalCard: FunctionComponent<IModalCardProps> = ({
  isVisible,
  onCancel,
  onSave,
  city,
}) => {

  if (!city) {
    return <></>;
  }

  const { icon, name, temperature } = city;

  const [cityName, setCityName] = useState(name);
  const [cityTemperature, setCityTemperature] = useState(temperature);

  useEffect(() => {
    setCityName(name);
    setCityTemperature(temperature);
  }, [name, temperature])

  const handleCityChange = useCallback((event) => {
    const { target: { value } } = event;
    setCityName(value);
  }, [])

  const handleTemperatureChange = useCallback((event) => {
    const { target: { value } } = event;
    setCityTemperature(value);
  }, []);

  return (
    <Modal
      title={`Card of city: ${name}`}
      visible={isVisible}
      onCancel={onCancel}
      footer={[
        <Button
          key={1}
          disabled={!cityName || !cityTemperature}
          onClick={() => onSave({ ...city, name: cityName, temperature: cityTemperature })}
        >
          Save
        </Button>,
        <Button
          key={2}
          type='danger'
          onClick={onCancel}
        >
          Cancel
        </Button>]}
    >
      <div className={styles.root}>
        <div className={styles.icon}>
          <img src={GET_WEATHER_ICON(icon)} alt='icon'></img>
        </div>
        <div className={styles.controlls}>
          <Input type="text" value={cityName} readOnly={false} onChange={handleCityChange} />
          <Input type="text" value={cityTemperature} onChange={handleTemperatureChange} />
        </div>
      </div>
    </Modal>

  )
}