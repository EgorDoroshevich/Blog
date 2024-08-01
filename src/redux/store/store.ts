import { configureStore } from "@reduxjs/toolkit";
import likeReducer from "./slices/likeSlice";
import themeReducer from "./slices/themeSlice";
import signInReducer from "./slices/signInSlice";

export const store = configureStore({
  reducer: {
    likeReducer,
    themeReducer,
    signInReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
