import { ReactNode } from 'react';

export interface IPanelSection {
  className?: string;
  children: ReactNode;
  fullwidth?: boolean;
}
