import { getRequest } from 'utils/http';

const url = `${process.env.REACT_APP_BACKEND_API}/users`;

export function getUserAPI(userId: number) {
  return getRequest(`${url}/${userId}`);
}