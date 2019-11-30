import React from 'react';
import Container from 'components/layout/Container';
import { Button } from 'components/Button';
import { useUser } from 'services/users/user/hook';
import styles from './styles.module.scss';
import { Greeting } from './components/Greeting';

export const HomePage = () => {
  const { getUser, user } = useUser();

  return (
    <div className={styles.homePage}>
      <Container>
        <div className={styles.greeting}>
          <Greeting userName={user && user.name} />

          <div className={styles.userButton}>
            <Button onClick={getUser}>
              GET A USER
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
