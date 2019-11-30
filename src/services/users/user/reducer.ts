/**
 * User info
 */
import {
  UserState,
  UserActionTypes,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
} from './types';

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

export function userReducer(state = initialState, action: UserActionTypes): UserState {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: true,
        error: null,
      };

    case GET_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
