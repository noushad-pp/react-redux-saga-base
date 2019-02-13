import { fork } from "redux-saga/effects";
import pageSaga from "./pageDetails/pageDetails.saga";
import userSaga from "./userDetails/userDetails.saga";

function* rootSaga() {
  yield fork(pageSaga);
  yield fork(userSaga);
}

export default rootSaga;
