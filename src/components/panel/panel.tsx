import React, { FunctionComponent, ReactElement, ReactNode } from 'react';
import cn from 'classnames';

import styles from './panel.scss';
import { IPanelSection } from './types';

export interface IPanelProps {
  children: ReactElement<IPanelSection> | Array<ReactElement<IPanelSection>> | ReactNode;
  className?: string;
}

export const Panel: FunctionComponent<IPanelProps> = ({ className = '', children }:IPanelProps) => {
  return (
    <section className={cn(styles.root, className)}>{children}</section>
  );
};
