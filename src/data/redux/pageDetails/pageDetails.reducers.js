import pageActions from "./pageDetails.actions";
import defaultState from "./pageDetails.states";
import { handleActions } from "redux-actions";
import update from "immutability-helper";

export default handleActions(
  new Map([
    [
      pageActions.pageDetails.setSystemLanguage,
      (state, { payload }) =>
        update(state, {
          currentPage: { $set: payload.currentPage }
        })
    ],
    [
      pageActions.pageDetails.setDeviceData,
      (state, { payload }) =>
        update(state, {
          deviceData: { $set: payload["deviceData"] }
        })
    ],
    [
      pageActions.pageDetails.setPage,
      (state, { payload }) =>
        update(state, {
          currentPage: { $set: payload.currentPage }
        })
    ]
  ]),
  defaultState
);
