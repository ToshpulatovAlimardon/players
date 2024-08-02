import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/use-http";

const initialState = {
  filters: [],
  filtersLoadingStatus: "success",
  activeFilter: "All",
};

export const fetchFilters = createAsyncThunk(
  "filters/fetchFilters",
  async () => {
    const { request } = useHttp();
    return await request("http://localhost:8080/filters");
  }
);

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    activeFilterChanged: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilters.pending, (state) => {
        state.filtersLoadingStatus = "loading";
      })
      .addCase(fetchFilters.fulfilled, (state, action) => {
        state.filtersLoadingStatus = "success";
        state.filters = action.payload;
      })
      .addCase(fetchFilters.rejected, (state) => {
        state.filtersLoadingStatus = "error";
      })
      .addDefaultCase(() => {});
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
