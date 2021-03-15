import { combineReducers } from "redux";
import { initialFetchReducer } from "./initalFetchReducer";
import { randomFetchReducer } from "./randomFetchReducer";

export default combineReducers({
  inititalFetchPoki: initialFetchReducer,
  randomFetchPoki: randomFetchReducer,
});
