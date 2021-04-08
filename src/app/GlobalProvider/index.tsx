import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ServiceProvider } from 'services';
import { StoreProvider } from 'store';
import { ThemeProvider } from 'theming';

export const GlobalProvider: React.FC = ({ children }) => (
  <ReactRouterDom.BrowserRouter>
    <ServiceProvider>
      <StoreProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </StoreProvider>
    </ServiceProvider>
  </ReactRouterDom.BrowserRouter>
);
