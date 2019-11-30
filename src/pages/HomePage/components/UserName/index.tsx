import React from 'react';
import styles from './styles.module.scss';

type GreetingProps = {
  userName: string;
}

const Greeting = ({ userName }: GreetingProps) => (
  <div className={styles.greeting}>
    Hello
    <span className={styles.userName}>
      {userName}
    </span>
  </div>
);

export default Greeting;
