import { takeLatest, put, call } from 'redux-saga/effects';
import { GET_USER, User } from './types';
import { getUserAPI } from './api';
import { getUserSuccess, getUserFail } from './actions';

function getRandomUserId(): number {
  return Math.floor(Math.random() * 10) + 1;
}

function* getUser() {
  try {
    const user: User = yield call(getUserAPI, getRandomUserId());
    yield put(getUserSuccess(user));
  } catch (e) {
    yield put(getUserFail(e));
  }
}

export const userEffects = [
  takeLatest(GET_USER, getUser),
];
