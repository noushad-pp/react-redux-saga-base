import { STATUS } from "../../config/constants";
import userActionTypes from "./userDetails.actionTypes";
import defaultState from "./userDetails.states";
import { handleActions } from "redux-actions";
import update from "immutability-helper";

export default handleActions(
  {
    [userActionTypes.USER_LOGIN_LOADING]: state => {
      return update(state, {
        userDetails: {
          status: { userLogin: { $set: STATUS.LOADING } }
        }
      });
    },
    [userActionTypes.USER_LOGIN_SUCCESS]: (state, { payload }) => {
      return update(state, {
        userDetails: {
          user: { $set: payload.user },
          status: { userLogin: { $set: STATUS.SUCCESS } }
        }
      });
    },
    [userActionTypes.USER_LOGIN_ERROR]: (state, { payload }) => {
      return update(state, {
        userDetails: {
          user: { $set: payload.user },
          status: { userLogin: { $set: STATUS.ERROR } },
          errors: { userLogin: { $set: payload.err } }
        }
      });
    }
  },
  defaultState
);
