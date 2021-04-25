import React from 'react';
import * as ThemeUI from 'theme-ui';

interface TextProps extends ThemeUI.TextProps {
  fontWeight?: string | number;
  fontSize?: string | number;
  textAlign?: 'left' | 'center' | 'right';
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
}

export const Text: React.FC<TextProps> = ({
  as = 'span',
  fontWeight,
  fontSize,
  textAlign,
  textTransform,
  variant,
  sx,
  children,
}) => (
  <ThemeUI.Text
    as={as}
    sx={{
      fontWeight,
      fontSize,
      textAlign,
      textTransform,
      color: 'text-primary',
      ...sx,
    }}
    variant={variant}
  >
    {children}
  </ThemeUI.Text>
);
