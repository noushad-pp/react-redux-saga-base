import { ActionTypes } from "../actionTypes";
import { all, put, takeLatest } from "redux-saga/effects";

export function* setSystLang({ lang }) {
  yield put({
    type: ActionTypes.SYST_LANG_SET,
    payload: { lang }
  });
}

export function* setDeviceData({ deviceData }) {
  yield put({
    type: ActionTypes.DEVICE_DATA_LOADED,
    payload: { deviceData }
  });
}

export function* setCurrentPage({ currentPage }) {
  yield put({
    type: ActionTypes.PAGE_CHANGED,
    payload: { currentPage }
  });
}

export default function* pageSagas() {
  yield all([
    takeLatest(ActionTypes.SYST_LANG_SET, setSystLang),
    takeLatest(ActionTypes.DEVICE_DATA_LOADED, setDeviceData),
    takeLatest(ActionTypes.PAGE_CHANGED, setCurrentPage)
  ]);
}
