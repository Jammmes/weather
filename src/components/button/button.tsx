import React, { FunctionComponent } from 'react';
import { Button as AntButton } from 'antd';
import 'antd/lib/button/style/css';

export type ButtonSizes = 'small' | 'default' | 'large';
export type ButtonTypes = 'link' | 'default' | 'ghost' | 'primary' | 'dashed' | 'danger';

export interface IButton {
  disabled?: boolean;
  icon?: string;
  size?: ButtonSizes;
  type?: ButtonTypes;
  onClick?: () => void;
  className?: string;
}

export const Button: FunctionComponent<IButton> = ({
  disabled,
  icon,
  size,
  type,
  children,
  onClick = () => false,
  className = '',
}) => {

  return (
    <AntButton
      disabled={disabled}
      icon={icon}
      size={size}
      type={type}
      onClick={onClick}
      className={className}
    >
      {children}
    </AntButton>
  );
};
