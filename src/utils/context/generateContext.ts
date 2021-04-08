import React from 'react';

export function generateContext<T>() {
  const context = React.createContext<T | undefined>(undefined);

  const useContextConsumer = () => {
    const c = React.useContext(context);
    if (!c) throw new Error('Component must be wrapped with <Container.Provider>');
    return c;
  };

  return [useContextConsumer, context.Provider] as const;
}
