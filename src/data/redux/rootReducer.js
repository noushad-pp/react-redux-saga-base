import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import pageDetails from "./pageDetails/reducers";
import userDetails from "./userDetails/reducers";

const rootReducer = history =>
  combineReducers({
    pageDetails,
    userDetails,
    router: connectRouter(history)
  });

export default rootReducer;
