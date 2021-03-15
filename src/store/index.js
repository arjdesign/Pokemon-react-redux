import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reduxLogger from "redux-logger";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(reduxThunk, reduxLogger))
);
