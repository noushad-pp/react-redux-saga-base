import { all, call, delay, put, takeLatest } from "redux-saga/effects";

import { ActionTypes } from "../actionTypes";

export function* login() {
  try {
    yield put({
      type: ActionTypes.USER_LOGIN_LOADING
    });
    yield call(delay, 400);

    yield put({
      type: ActionTypes.USER_LOGIN_SUCCESS
    });
  } catch (err) {
    yield put({
      type: ActionTypes.USER_LOGIN_FAILURE,
      payload: err
    });
  }
}

export default function* rootUserSaga() {
  yield all([takeLatest(ActionTypes.USER_LOGIN, login)]);
}
