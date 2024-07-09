import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./features/playerSlice";
import { sameSpaceApi } from "./services/sameSpaceApi";

export const store = configureStore({
  reducer: {
    [sameSpaceApi.reducerPath]: sameSpaceApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sameSpaceApi.middleware),
});
