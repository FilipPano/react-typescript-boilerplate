export const GET_USER = '@user/';
export const GET_USER_SUCCESS = '@user/success';
export const GET_USER_FAIL = '@user/fail';

export type User = {
  name: string;
}

export type UserState = {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export type GetUserAction = {
  type: typeof GET_USER;
}

export type GetUserSuccessAction = {
  type: typeof GET_USER_SUCCESS;
  payload: User;
}

export type GetUserFailAction = {
  type: typeof GET_USER_FAIL;
  payload: string;
}

export type UserActionTypes = GetUserAction | GetUserSuccessAction | GetUserFailAction
