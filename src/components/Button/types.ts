import { ReactNode } from 'react';

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  children: ReactNode;
  onClick: Function;
}
