import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import pageDetails from "./pageDetails/pageDetails.reducers";
import userDetails from "./userDetails/userDetails.reducers";

const rootReducer = history =>
  combineReducers({
    pageDetails,
    userDetails,
    router: connectRouter(history)
  });

export default rootReducer;
