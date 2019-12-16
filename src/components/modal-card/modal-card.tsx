import React, { FunctionComponent } from 'react';
import { Modal } from 'antd';
import 'antd/lib/modal/style/css';

import styles from './modal-card.scss';

export interface IModalCardProps {
  title: string;
  isVisible: boolean;
  onOk: () => void;
  onCancel: () => void;
}

export const ModalCard: FunctionComponent<IModalCardProps> = ({
  title,
  isVisible,
  onOk,
  onCancel,
  children,
}) => {

  return (
    <Modal
      title={title}
      visible={isVisible}
      onOk={onOk}
      onCancel={onCancel}
    >
      {children}
    </Modal>

  )
}