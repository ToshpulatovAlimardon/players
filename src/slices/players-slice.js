import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: [],
  playersLoadingStatus: "success",
};

const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    playersFetching: (state) => {
      state.playersLoadingStatus = "loading";
    },
    playersFetched: (state, action) => {
      (state.players = action.payload),
        (state.playersLoadingStatus = "success");
    },
    playersFetchingError: (state) => {
      state.playersLoadingStatus = "error";
    },
    playersCreated: (state, action) => {
      state.players.push(action.payload);
    },
    playerDeleted: (state, action) => {
      state.players = state.players.filter(
        (player) => player.id !== action.payload
      );
    },
  },
});

const { actions, reducer } = playersSlice;

export default reducer;

export const {
  playerDeleted,
  playersCreated,
  playersFetched,
  playersFetching,
  playersFetchingError,
} = actions;
