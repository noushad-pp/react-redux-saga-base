import { ActionTypes } from "../actionTypes";
import { createActions } from "redux-actions";

export const { userLogin, userLogout } = createActions({
  [ActionTypes.USER_LOGIN]: () => ({}),
  [ActionTypes.USER_LOGOUT]: () => ({})
});
