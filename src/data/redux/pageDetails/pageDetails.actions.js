import pageActionTypes from "./pageDetails.actionTypes";
import { createActions } from "redux-actions";

export default createActions({
  [pageActionTypes.PREFIX]: {
    [pageActionTypes.TRIGGER_SET_DEVICE_DATA]: () => {},
    [pageActionTypes.SET_DEVICE_DATA]: deviceData => ({ deviceData }),
    [pageActionTypes.TRIGGER_SET_PAGE]: currentPage => ({ currentPage }),
    [pageActionTypes.SET_PAGE]: currentPage => ({ currentPage })
  }
});
