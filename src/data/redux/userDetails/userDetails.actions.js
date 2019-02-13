import userActionTypes from "./userDetails.actionTypes";
import { createActions } from "redux-actions";

export const { userLogin, userLogout } = createActions({
  [userActionTypes.USER_LOGIN]: () => ({}),
  [userActionTypes.USER_LOGOUT]: () => ({})
});
