import { configureStore } from "@reduxjs/toolkit";
import likeReducer from "./slices/likeSlice";
import themeReducer from "./slices/themeSlice";
import signInReducer from "./slices/signInSlice";
import signUpReducer from "./slices/signUpSlice";
import UserReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    likeReducer,
    themeReducer,
    signInReducer,
    signUpReducer,
    UserReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
