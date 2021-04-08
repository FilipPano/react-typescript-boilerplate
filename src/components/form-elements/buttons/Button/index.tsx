import React from 'react';
import * as ThemeUI from 'theme-ui';
import { ButtonVariants } from 'theming/variants/buttons';

interface ButtonProps extends ThemeUI.ButtonProps {
  as?: React.ElementType;
  variant?: ButtonVariants;
}

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  as,
  variant,
  sx,
  children,
  ...props
}) => (
  <ThemeUI.Button
    as={as || 'button'}
    sx={{
      cursor: 'pointer',

      '&:disabled': {
        cursor: 'default',
      },
      ...sx,
    }}
    variant={variant}
    type={type}
    {...props}
  >
    {children}
  </ThemeUI.Button>
);
