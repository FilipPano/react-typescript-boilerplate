import { useDispatch } from 'react-redux';
import { useState } from 'store/hook';
import { getUser } from './slice';

export const useUser = () => {
  const { user, loading, error } = useState((state) => state.user);

  const dispatch = useDispatch();

  return {
    getUser: () => dispatch(getUser()),
    user,
    loading,
    error,
  };
};
