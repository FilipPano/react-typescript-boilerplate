import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from 'App';
import * as serviceWorker from './serviceWorker';

// eslint-disable-next-line react/no-render-return-value
const renderApp = () => ReactDOM.render(<App />, document.getElementById('root'));

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', renderApp);
}

renderApp();

serviceWorker.unregister();
