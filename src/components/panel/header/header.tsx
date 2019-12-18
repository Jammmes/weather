import React, { FunctionComponent } from 'react';
import cn from 'classnames';

import styles from './header.scss';

import { IPanelSection } from '../types';

export const Header: FunctionComponent<IPanelSection> = ({
  fullwidth = false,
  children,
  className = '',
}) => {
  return (
    <header className={cn(styles.root, { [styles.fullwidth]: fullwidth }, className)}>{children}</header>
  );
};
