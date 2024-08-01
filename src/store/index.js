import { configureStore } from "@reduxjs/toolkit";
import filters from "../slices/filters-slice";
import players from "../slices/players-slice";

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
