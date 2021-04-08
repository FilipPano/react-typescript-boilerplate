import React from 'react';
import { Link, LinkProps } from 'components/links';

export const NavLink: React.FC<LinkProps> = ({ to, children, ...props }) => (
  <Link
    variant="nav"
    to={to}
    {...props}
  >
    {children}
  </Link>
);
