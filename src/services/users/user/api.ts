import { getRequest } from 'utils/http';
import { BACKEND_API } from 'global/environment';

const url = `${BACKEND_API}/users`;

export function getUserAPI(userId: number) {
  return getRequest(`${url}/${userId}`);
}
