import React from 'react';
import { Flex } from 'components/layout';
import { StyleObject } from 'theming';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  sx?: StyleObject;
  onSubmit: () => void;
}

export const Form: React.FC<FormProps> = ({ children, sx, onSubmit }) => (
  <Flex
    as="form"
    sx={sx}
    onSubmit={e => {
      e.preventDefault();
      onSubmit();
    }}
  >
    {children}
  </Flex>
);
