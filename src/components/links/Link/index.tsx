import React from 'react';
import * as ThemeUI from 'theme-ui';
import * as ReactRouterDom from 'react-router-dom';
import { LinkVariants } from 'theming/variants/links';

// Cast the type of ThemeUI.LinkProps to also include ReactRouterDom.NavLinkProps
interface ThemeUILinkProps extends ThemeUI.LinkProps, ReactRouterDom.NavLinkProps{}
const ThemeUILink: React.FC<ThemeUILinkProps> = ThemeUI.Link;

export interface LinkProps extends ThemeUILinkProps {
  variant?: LinkVariants;
}

export const Link: React.FC<LinkProps> = ({ to, variant, children, ...props }) => (
  <ThemeUILink
    as={ReactRouterDom.NavLink}
    variant={variant}
    to={to}
    {...props}
  >
    {children}
  </ThemeUILink>
);
