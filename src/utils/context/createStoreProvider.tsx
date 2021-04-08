import React from 'react';
import { generateContext } from './generateContext';

export function createStoreProvider<T>(useHook: () => T) {
  const [useContextConsumer, ContextProvider] = generateContext<T>();

  const StoreProvider: React.FC = ({ children }) => {
    const state = useHook();

    return (
      <ContextProvider value={state}>
        {children}
      </ContextProvider>
    );
  };

  return [useContextConsumer, StoreProvider] as const;
}
