import players from "../reducers/players";
import filters from "../reducers/filters";
import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === "string") {
    return next({ type: action });
  }

  return next(action);
};

const store = configureStore({
  reducer: { players, filters },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stringMiddleware),
  devTools: true,
});

export default store;
