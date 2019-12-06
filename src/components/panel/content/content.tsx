import React, { FunctionComponent } from 'react';
import cn from 'classnames';

import styles from './content.scss';
import { IPanelSection } from '../types';

export const Content: FunctionComponent<IPanelSection> = ({
  fullwidth = false,
  children,
  className = '',
}) => {
  return (
    <div className={cn(styles.root, { [styles.fullwidth]: fullwidth }, className)}>{children}</div>
  );
};
