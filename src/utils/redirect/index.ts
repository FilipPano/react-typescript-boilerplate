import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

export function useRedirect(path: string, shouldRedirect = false) {
  const history = useHistory();
  
  useEffect(() => {
    if (shouldRedirect) {
      history.push(path);
    }
  }, [history, path, shouldRedirect]);

  return {
    onRedirect: (redirectPath = path) => history.push(redirectPath),
  };
}
