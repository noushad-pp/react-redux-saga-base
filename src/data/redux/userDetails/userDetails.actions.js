import userActionTypes from "./userDetails.actionTypes";
import { createActions } from "redux-actions";

export default createActions({
  [userActionTypes.PREFIX]: {
    [userActionTypes.TRIGGER_LOGIN]: () => ({}),
    [userActionTypes.LOGIN_LOADING]: () => ({}),
    [userActionTypes.LOGIN_SUCCESS]: user => ({ user }),
    [userActionTypes.LOGIN_ERROR]: () => ({}),
    [userActionTypes.TRIGGER_LOGOUT]: () => ({}),
    [userActionTypes.LOGOUT]: () => ({})
  }
});
