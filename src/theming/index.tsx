import React from 'react';
import * as ThemeUI from 'theme-ui';
import { foundations } from './foundations';
import { variants } from './variants';

export type StyleObject = ThemeUI.ThemeUIStyleObject;

export const ThemeProvider: React.FC = ({ children }) => (
  <ThemeUI.ThemeProvider theme={{ ...foundations, ...variants }}>
    {children}
  </ThemeUI.ThemeProvider>
);
