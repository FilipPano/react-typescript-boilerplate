import React from 'react';
import { GlobalProvider } from 'app/GlobalProvider';
import { Routes } from 'app/Routes';

const App: React.FC = () => (
  <GlobalProvider>
    <Routes />
  </GlobalProvider>
);

export default App;
