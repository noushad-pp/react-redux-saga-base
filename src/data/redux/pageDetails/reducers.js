import { ActionTypes } from "../actionTypes";
import defaultState from "./states";
import { handleActions } from "redux-actions";
import update from "immutability-helper";

export default handleActions(
  {
    [ActionTypes.SYST_LANG_SET]: (state, { payload }) => {
      return update(state, {
        lang: { $set: payload.lang }
      });
    },
    [ActionTypes.DEVICE_DATA_LOADED]: (state, { payload }) => {
      console.log(state);
      return update(state, {
        deviceData: { $set: payload["deviceData"] }
      });
    },
    [ActionTypes.PAGE_CHANGED]: (state, { payload }) => {
      return update(state, {
        currentPage: { $set: payload.currentPage }
      });
    }
  },
  defaultState
);
