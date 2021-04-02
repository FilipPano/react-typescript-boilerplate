import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HOME_PAGE } from 'global/routes';
import { HomePage } from 'pages/HomePage';

const App = () => (
  <Router>
    <Route
      exact
      path={HOME_PAGE}
      component={HomePage}
    />
  </Router>
);

export default App;
