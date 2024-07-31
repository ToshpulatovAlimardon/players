import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import players from "../reducers/players";
import filters from "../reducers/filters";
import { thunk } from "redux-thunk";

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === "string") {
    return next({ type: action });
  }

  return next(action);
};

const store = legacy_createStore(
  combineReducers({ players, filters }),
  compose(
    applyMiddleware(stringMiddleware, thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
