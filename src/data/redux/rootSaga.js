import { fork } from "redux-saga/effects";
import pageSaga from "./pageDetails/saga";
import userSaga from "./userDetails/saga";

export default function* rootSaga() {
  yield fork(pageSaga);
  yield fork(userSaga);
}
