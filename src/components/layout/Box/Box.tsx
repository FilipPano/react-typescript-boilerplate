import React from 'react';
import * as ThemeUI from 'theme-ui';

export const Box: React.FC<ThemeUI.BoxProps> = ({ sx, as, children, ...props }) => (
  <ThemeUI.Box
    as={as}
    sx={sx}
    {...props}
  >
    {children}
  </ThemeUI.Box>
);
