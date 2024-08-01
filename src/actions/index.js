import { createAction } from "@reduxjs/toolkit";
import {
  playersFetched,
  playersFetchingError,
  playersFetching,
} from "../slices/players-slice";
import {
  filtersFetched,
  filtersFetching,
  filtersFetchingError,
} from "../slices/filters-slice";

export const fetchPlayers = (request) => (dispatch) => {
  dispatch(playersFetching());

  request("http://localhost:8080/players")
    .then((data) => dispatch(playersFetched(data)))
    .catch(() => dispatch(playersFetchingError()));
};

export const fetchFilters = (request) => (dispatch) => {
  dispatch(filtersFetching());

  request("http://localhost:8080/filters")
    .then((data) => dispatch(filtersFetched(data)))
    .catch(() => dispatch(filtersFetchingError()));
};

export const activeFilterChanged = createAction("ACTIVE_FILTER_CHANGED");
