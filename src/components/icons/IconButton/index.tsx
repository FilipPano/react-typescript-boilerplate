import React from 'react';
import * as ThemeUI from 'theme-ui';

export const IconButton: React.FC<ThemeUI.IconButtonProps> = ({
  sx,
  children,
  onClick,
  ...props
}) => (
  <ThemeUI.IconButton
    sx={sx}
    onClick={onClick}
    {...props}
  >
    {children}
  </ThemeUI.IconButton>
);
