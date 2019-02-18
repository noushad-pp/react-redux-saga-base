import { all, delay, put, takeLatest } from "redux-saga/effects";

import userActions from "./userDetails.actions";

export function* login() {
  try {
    yield put({
      type: userActions.userDetails.loginLoading.toString()
    });
    yield delay(500);

    yield put({
      type: userActions.userDetails.loginSuccess.toString(),
      payload: {
        user: {
          id: 1,
          firstname: "John",
          lastname: "Doe",
          email: "john.doe@email.com"
        }
      }
    });
  } catch (err) {
    yield put({
      type: userActions.userDetails.loginError.toString(),
      payload: err
    });
  }
}

export default function* rootUserSaga() {
  yield all([
    takeLatest(userActions.userDetails.triggerLogin.toString(), login)
  ]);
}
