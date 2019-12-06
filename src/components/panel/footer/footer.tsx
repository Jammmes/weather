import React, { FunctionComponent } from 'react';
import cn from 'classnames';

import styles from './footer.scss';
import { IPanelSection } from '../types';

export const Footer: FunctionComponent<IPanelSection> = ({
  fullwidth = false,
  children,
  className = '',
}) => {
  return (
    <footer className={cn(styles.root, { [styles.fullwidth]: fullwidth }, className)}>{children}</footer>
  );
};
