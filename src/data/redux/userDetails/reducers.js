import { ActionTypes, STATUS } from "../actionTypes";
import defaultState from "./states";
import { handleActions } from "redux-actions";
import update from "immutability-helper";

export default handleActions(
  {
    [ActionTypes.USER_LOGIN_LOADING]: state => {
      return update(state, {
        userDetails: {
          status: { userLogin: { $set: STATUS.LOADING } }
        }
      });
    },
    [ActionTypes.USER_LOGIN_SUCCESS]: (state, { payload }) => {
      return update(state, {
        userDetails: {
          user: { $set: payload.user },
          status: { userLogin: { $set: STATUS.SUCCESS } }
        }
      });
    },
    [ActionTypes.USER_LOGIN_ERROR]: (state, { payload }) => {
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
