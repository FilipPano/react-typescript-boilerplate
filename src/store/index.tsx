import React from 'react';
import { ModalProvider } from './modals';

export const StoreProvider: React.FC = ({ children }) => (
  <ModalProvider>
    {children}
  </ModalProvider>
);
