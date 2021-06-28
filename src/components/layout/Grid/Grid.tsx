import React from 'react';
import * as ThemeUI from 'theme-ui';

export const Grid: React.FC<ThemeUI.GridProps> = ({
  columns,
  gap,
  sx,
  width,
  children,
  ...props
}) => (
  <ThemeUI.Grid
    columns={columns}
    width={width}
    gap={gap}
    sx={sx}
    {...props}
  >
    {children}
  </ThemeUI.Grid>
);
