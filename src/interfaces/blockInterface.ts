import { ReactNode } from 'react';

export type BlockInterface = {
  children?: ReactNode;
  className?: string;
  title: string;
  button?: string;
};
