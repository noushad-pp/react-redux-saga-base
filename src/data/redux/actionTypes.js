import keyMirror from "fbjs/lib/keyMirror";

export const ActionTypes = keyMirror({
  SYST_LANG_SET: null,
  DEVICE_DATA_LOADED: null,
  PAGE_CHANGED: null,

  USER_LOGIN: null,
  USER_LOGIN_LOADING: null,
  USER_LOGIN_SUCCESS: null,
  USER_LOGIN_FAILURE: null,

  USER_LOGOUT: null,
  USER_LOGOUT_LOADING: null,
  USER_LOGOUT_SUCCESS: null,
  USER_LOGOUT_FAILURE: null
});

export const STATUS = keyMirror({
  IDLE: null,
  LOADING: null,
  READY: null,
  SUCCESS: null,
  ERROR: null
});
