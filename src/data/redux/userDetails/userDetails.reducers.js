import { STATUS } from "../../config/constants";
import userActions from "./userDetails.actions";
import defaultState from "./userDetails.states";
import { handleActions } from "redux-actions";
import update from "immutability-helper";

export default handleActions(
  new Map([
    [
      userActions.userDetails.loginLoading,
      state =>
        update(state, {
          status: { userLogin: { $set: STATUS.LOADING } }
        })
    ],
    [
      userActions.userDetails.loginSuccess,
      (state, { payload }) =>
        update(state, {
          user: { $set: payload.user },
          status: { userLogin: { $set: STATUS.SUCCESS } }
        })
    ],
    [
      userActions.userDetails.loginError,
      (state, { payload }) =>
        update(state, {
          user: { $set: null },
          status: { userLogin: { $set: STATUS.ERROR } },
          errors: { userLogin: { $set: payload.err } }
        })
    ],
    [
      userActions.userDetails.logout,
      state =>
        update(state, {
          user: { $set: null },
          status: { userLogin: { $set: null } },
          errors: { userLogin: { $set: null } }
        })
    ]
  ]),
  defaultState
);
