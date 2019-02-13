import pageActionTypes from "./pageDetails.actionTypes";
import { createActions } from "redux-actions";

console.log(pageActionTypes.PREFIX);
export default createActions({
  [pageActionTypes.PREFIX]: {
    [pageActionTypes.SET_SYSTEM_LANGUAGE]: lang => ({ lang }),
    [pageActionTypes.SET_DEVICE_DATA]: deviceData => ({ deviceData }),
    [pageActionTypes.SET_PAGE]: currentPage => ({ currentPage })
  }
});
