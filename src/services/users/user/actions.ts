import {
  User,
  GetUserAction,
  GetUserSuccessAction,
  GetUserFailAction,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
} from './types';

export function getUser(): GetUserAction {
  return {
    type: GET_USER,
  };
}

export function getUserSuccess(user: User): GetUserSuccessAction {
  return {
    type: GET_USER_SUCCESS,
    payload: user,
  };
}

export function getUserFail(error: string): GetUserFailAction {
  return {
    type: GET_USER_FAIL,
    payload: error,
  };
}
