import React from 'react';
import styles from './styles.module.scss';
import Greeting from './components/UserName';
import Container from 'components/layout/Container';
//import useUser from 'services/users/user/hook';
//import Container from 'components/layout/Container';
import { Button } from 'components/Button';

const HomePage = () => (
  // const [getUser, { user }] = useUser();
  <div className={styles.homePage}>
    <Container>
      <div className={styles.greeting}>
        <Greeting userName="test" />

        <div className={styles.userButton}>
          <Button onClick={() => console.log('hey')}>
              GET A USER
          </Button>
        </div>
      </div>
    </Container>
  </div>
);
export default HomePage;
