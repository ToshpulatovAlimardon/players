import { combineReducers, legacy_createStore } from "redux";
import players from "../reducers/players";
import filters from "../reducers/filters";

const store = legacy_createStore(
  combineReducers({ players, filters }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
