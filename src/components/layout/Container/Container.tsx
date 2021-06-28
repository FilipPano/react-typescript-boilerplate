import React from 'react';
import * as ThemeUI from 'theme-ui';
import { LayoutVariants } from 'theming/variants/layout';

interface ContainerProps extends ThemeUI.ContainerProps {
  variant?: LayoutVariants;
}

export const Container: React.FC<ContainerProps> = ({ children, ...props }) => (
  <ThemeUI.Container {...props}>
    {children}
  </ThemeUI.Container>
);
