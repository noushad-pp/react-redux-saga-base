import pageActionTypes from "./pageDetails.actionTypes";
import { all, put, takeLatest } from "redux-saga/effects";

export function* setSystLang({ lang }) {
  yield put({
    type: pageActionTypes.SET_SYSTEM_LANGUAGE,
    payload: { lang }
  });
}

export function* setDeviceData({ deviceData }) {
  yield put({
    type: pageActionTypes.SET_DEVICE_DATA,
    payload: { deviceData }
  });
}

export function* setCurrentPage({ currentPage }) {
  yield put({
    type: pageActionTypes.SET_PAGE,
    payload: { currentPage }
  });
}

export default function* pageSagas() {
  yield all([
    takeLatest(pageActionTypes.SET_SYSTEM_LANGUAGE, setSystLang),
    takeLatest(pageActionTypes.SET_DEVICE_DATA, setDeviceData),
    takeLatest(pageActionTypes.SET_PAGE, setCurrentPage)
  ]);
}
