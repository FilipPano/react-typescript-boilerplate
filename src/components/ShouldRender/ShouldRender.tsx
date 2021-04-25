import React from 'react';

interface ShouldRenderProps {
  when: boolean;
  children: any;
}

export const ShouldRender: React.FC<ShouldRenderProps> = ({ when, children }) => (
  when ? children : null
);
