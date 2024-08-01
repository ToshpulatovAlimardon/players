import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: [],
  filtersLoadingStatus: "success",
  activeFilter: "All",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filtersFetching: (state) => {
      state.filtersLoadingStatus = "loading";
    },
    filtersFetched: (state, action) => {
      state.filtersLoadingStatus = "success";
      state.filters = action.payload;
    },
    filtersFetchingError: (state) => {
      state.filtersLoadingStatus = "error";
    },
    activeFilterChanged: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
});

const { reducer, actions } = filtersSlice;

export default reducer;

export const {
  activeFilterChanged,
  filtersFetched,
  filtersFetching,
  filtersFetchingError,
} = actions;
