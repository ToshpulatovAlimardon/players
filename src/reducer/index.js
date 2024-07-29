const initialState = {
  players: [],
  playersLoadingStatus: "success",
  filters: [],
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
        playersLoadingStatus: "success",
      };
    case "PLAYERS_FETCHING_ERROR":
      return {
        ...state,
        playersLoadingStatus: "error",
      };
    case "PLAYER_CREATED":
      return {
        ...state,
        players: [...state.players, action.payload],
      };
    case "PLAYER_DELETED":
      return {
        ...state,
        players: state.players.filter((player) => player.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
