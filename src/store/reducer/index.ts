import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from 'services/users/user/slice';

export const rootReducer = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>
