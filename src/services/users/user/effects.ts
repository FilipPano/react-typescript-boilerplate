import { takeLatest, put, call } from 'redux-saga/effects';
import { User } from './types';
import { getUserAPI } from './api';
import { getUserSuccess, getUserFail, getUser } from './slice';

function* getUserEffect() {
  try {
    const user: User = yield call(getUserAPI);
    yield put(getUserSuccess(user));
  } catch (e) {
    yield put(getUserFail(e));
  }
}

export const userEffects = [
  takeLatest(getUser, getUserEffect),
];
