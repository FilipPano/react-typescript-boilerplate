import React from 'react';
import styles from './styles.module.scss';
import { ContainerProps } from './types';

const Container = ({ children }: ContainerProps) => (
  <div className={styles.container}>
    {children}
  </div>
);

export default Container;
