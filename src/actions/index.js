export const playersFetching = () => {
  return {
    type: "PLAYERS_FETCHING",
  };
};

export const playersFetched = (players) => {
  return {
    type: "PLAYERS_FETCHED",
    payload: players,
  };
};

export const playersFetchingError = () => {
  return {
    type: "PLAYERS_FETCHING_ERROR",
  };
};

export const filtersFetching = () => {
  return {
    type: "FILTERS_FETCHING",
  };
};

export const filtersFetched = (filters) => {
  return {
    type: "FILTERS_FETCHED",
    payload: filters,
  };
};

export const filtersFetchingError = () => {
  return {
    type: "FILTERS_FETCHING_ERROR",
  };
};

export const playersCreated = (player) => {
  return {
    type: "PLAYER_CREATED",
    payload: player,
  };
};

export const playerDeleted = (id) => {
  return {
    type: "PLAYER_DELETED",
    payload: id,
  };
};

export const activeFilterChanged = (filter) => {
  return {
    type: "ACTIVE_FILTER_CHANGED",
    payload: filter,
  };
};
