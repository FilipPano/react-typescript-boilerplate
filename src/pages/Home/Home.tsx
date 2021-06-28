import React from 'react';
import { Text } from 'components/typography';
import { Container } from 'components/layout';

export const Home: React.FC = () => (
  <Container variant="page">
    <Text as="h1">
      React Boilerplate
    </Text>

    <Text as="h3">
      Please refer to README.md for documentation
    </Text>
  </Container>
);
