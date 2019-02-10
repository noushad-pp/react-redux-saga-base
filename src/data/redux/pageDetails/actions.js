import { ActionTypes } from "../actionTypes";
import { createActions } from "redux-actions";

export default createActions({
  [ActionTypes.SYST_LANG_SET]: lang => ({ lang }),
  [ActionTypes.DEVICE_DATA_LOADED]: deviceData => ({ deviceData }),
  [ActionTypes.PAGE_CHANGED]: currentPage => ({ currentPage })
});
