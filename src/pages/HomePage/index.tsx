import React from 'react';
import Container from 'components/layout/Container';
import { Button } from 'components/Button';
import styles from './styles.module.scss';
import { Greeting } from './components/Greeting';

export const HomePage = () => {
  // const { getUser, user, loading } = useUser();

  const user = { name: 'hello' };
  const loading = false;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const getUser = () => {};

  return (
    <div className={styles.homePage}>
      <Container>
        <div className={styles.greeting}>
          <Greeting userName={user && user.name} />

          <div className={styles.userButton}>
            <Button onClick={getUser}>
              {loading ? 'Fetching..' : 'GET A USER'}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
