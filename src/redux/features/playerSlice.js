import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  bgColor: "#000",
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;
      state.currentSongs = action.payload.songs;
      state.currentIndex = action.payload.index;
      state.isActive = true;
    },
    setBgColor: (state, action) => {
      state.bgColor = action.payload;
    },
    nextSong: (state) => {
      const nextIndex = state.currentIndex + 1;
      if (nextIndex < state.currentSongs.length) {
        state.activeSong = state.currentSongs[nextIndex];
        state.currentIndex = nextIndex;
        state.isActive = true;
      }
    },
    prevSong: (state) => {
      const prevIndex = state.currentIndex - 1;
      if (prevIndex >= 0) {
        state.activeSong = state.currentSongs[prevIndex];
        state.currentIndex = prevIndex;
        state.isActive = true;
      }
    },
    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
});

export const { setActiveSong, setBgColor, nextSong, prevSong, playPause } =
  playerSlice.actions;

export default playerSlice.reducer;
