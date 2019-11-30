import React from 'react';
import styles from './styles.module.scss';
import { GreetingProps } from './types';

export const Greeting = ({ userName }: GreetingProps) => (
  <div className={styles.greeting}>
    Hello
    <span className={styles.userName}>
      {userName || 'Unknown user'}
    </span>
  </div>
);
