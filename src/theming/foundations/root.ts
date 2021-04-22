import { StyleObject } from 'theming/index';

export const root: StyleObject = {
  background: 'white',
  margin: '0px',
  boxSizing: 'border-box',

  '*, *::before, *::after': {
    boxSizing: 'inherit',
    margin: '0px',
    fontFamily: '"Lato", sans-serif',
  },
};
