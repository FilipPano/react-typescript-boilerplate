import React from 'react';
import styles from './styles.module.scss';
import { ButtonProps } from './types';

export const Button = ({ type = 'button', children, onClick }: ButtonProps) => (
  <button
    type={type}
    className={styles.button}
    onClick={() => onClick()}
  >
    {children}
  </button>
);
