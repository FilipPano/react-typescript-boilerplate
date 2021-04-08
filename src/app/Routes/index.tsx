import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import * as Pages from 'pages';
import { Routing } from 'global/routing';

export const Routes: React.FC = () => (
  <ReactRouterDom.Switch>
    <ReactRouterDom.Route
      exact
      path={Routing.HOME.getPath()}
      component={Pages.Home}
    />

    <ReactRouterDom.Route
      exact
      path={Routing.PRODUCT.getPath({ id: ':id' })}
      component={Pages.Product}
    />
  </ReactRouterDom.Switch>
);
