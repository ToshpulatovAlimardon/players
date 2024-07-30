const initialState = {
  players: [],
  playersLoadingStatus: "success",
  filters: [],
  filtersLoadingStatus: "success",
  activeFilter: "All",
  filteredPlayers: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLAYERS_FETCHING":
      return {
        ...state,
        playersLoadingStatus: "loading",
      };
    case "PLAYERS_FETCHED":
      return {
        ...state,
        players: action.payload,
        filteredPlayers:
          state.activeFilter === "All"
            ? state.players
            : state.players.filter(
                (player) => player.continent === state.activeFilter
              ),
        playersLoadingStatus: "success",
      };
    case "PLAYERS_FETCHING_ERROR":
      return {
        ...state,
        playersLoadingStatus: "error",
      };
    case "FILTERS_FETCHING":
      return {
        ...state,
        filtersLoadingStatus: "loading",
      };
    case "FILTERS_FETCHED":
      return {
        ...state,
        filters: action.payload,
        filtersLoadingStatus: "success",
      };
    case "FILTERS_FETCHING_ERROR":
      return {
        ...state,
        filtersLoadingStatus: "error",
      };
    case "PLAYER_CREATED":
      const newPlayers = [...state.players, action.payload];

      return {
        ...state,
        players: newPlayers,
        filteredPlayers:
          state.activeFilter === "All"
            ? newPlayers
            : newPlayers.filter(
                (player) => player.continent === state.activeFilter
              ),
      };
    case "PLAYER_DELETED":
      const deletedPlayers = state.players.filter(
        (player) => player.id !== action.payload
      );
      return {
        ...state,
        players: deletedPlayers,
        filteredPlayers:
          state.activeFilter === "All"
            ? deletedPlayers
            : deletedPlayers.filter(
                (player) => player.continent === state.activeFilter
              ),
      };
    case "ACTIVE_FILTER_CHANGED":
      return {
        ...state,
        activeFilter: action.payload,
        filteredPlayers:
          action.payload === "All"
            ? state.players
            : state.players.filter(
                (player) => player.continent === action.payload
              ),
      };
    default:
      return state;
  }
};

export default reducer;
