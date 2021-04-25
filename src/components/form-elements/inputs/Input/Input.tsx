import React from 'react';
import * as ThemeUI from 'theme-ui';
import { InputVariants } from 'theming/variants/forms';

interface InputProps extends ThemeUI.InputProps {
  variant?: InputVariants;
}

export const Input: React.FC<InputProps> = ({
  variant,
  sx,
  children,
  ...props
}) => (
  <ThemeUI.Input
    sx={sx}
    variant={variant}
    {...props}
  >
    {children}
  </ThemeUI.Input>
);
