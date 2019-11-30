import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store';
import { HOME_PAGE } from 'global/routes';
import { HomePage } from 'pages/HomePage';

const App = () => (
  <Router>
    <Provider store={store}>
      <Route
        exact
        path={HOME_PAGE}
        component={HomePage}
      />
    </Provider>
  </Router>
);

export default App;
