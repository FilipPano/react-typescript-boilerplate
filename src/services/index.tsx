import * as ReactQuery from 'react-query';
import React from 'react';

const queryClient = new ReactQuery.QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, // Change to milliseconds in case you want to refetch data in the background
      cacheTime: Infinity, // Change to milliseconds in case you want to garbage collect unused data
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export const ServiceProvider: React.FC = ({ children }) => (
  <ReactQuery.QueryClientProvider client={queryClient}>
    {children}
  </ReactQuery.QueryClientProvider>
);
