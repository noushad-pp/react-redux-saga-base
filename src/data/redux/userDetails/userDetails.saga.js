import { all, call, delay, put, takeLatest } from "redux-saga/effects";

import userActionTypes from "./userDetails.actionTypes";

export function* login() {
  try {
    yield put({
      type: userActionTypes.USER_LOGIN_LOADING
    });
    yield call(delay, 400);

    yield put({
      type: userActionTypes.USER_LOGIN_SUCCESS
    });
  } catch (err) {
    yield put({
      type: userActionTypes.USER_LOGIN_FAILURE,
      payload: err
    });
  }
}

export default function* rootUserSaga() {
  yield all([takeLatest(userActionTypes.USER_LOGIN, login)]);
}
