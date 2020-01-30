import { getRequest } from 'utils/http';
import { BACKEND_API } from 'global/environment';

const url = `${BACKEND_API}/users`;

function getRandomUserId(): number {
  return Math.floor(Math.random() * 10) + 1;
}

export function getUserAPI() {
  return getRequest(`${url}/${getRandomUserId()}`);
}
