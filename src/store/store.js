import { createStore, combineReducers } from "redux";
import { userReducer } from "./reduser";

const store = combineReducers({
  userStore: userReducer,
});

export default createStore(store);
