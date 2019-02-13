import { all, put, takeLatest } from "redux-saga/effects";
import pageActions from "./pageDetails.actions";
import * as UTILS from "../../utils/deviceData";

export function* setDeviceDetails() {
  const deviceData = UTILS.getDeviceData();
  yield put({
    type: pageActions.pageDetails.setDeviceData.toString(),
    payload: { deviceData }
  });
}

export function* setCurrentPage({ payload }) {
  yield put({
    type: pageActions.pageDetails.setPage.toString(),
    payload
  });
}

export default function* pageSagas() {
  yield all([
    takeLatest(
      pageActions.pageDetails.triggerSetDeviceData.toString(),
      setDeviceDetails
    ),
    takeLatest(
      pageActions.pageDetails.triggerSetPage.toString(),
      setCurrentPage
    )
  ]);
}
