import { configureStore } from "@reduxjs/toolkit";
import likeReducer from "./slices/likeSlice";
import themeReducer from "./slices/themeSlice";
import UserReducer from "./slices/userSlice";
import routeReducer from "./slices/routeSlice";
export const store = configureStore({
  reducer: {
    likeReducer,
    themeReducer,
    user: UserReducer,
    routeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
