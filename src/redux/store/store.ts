import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

import themeReducer from "./slices/themeSlice";
import userReducer from "./slices/userSlice";
import routeReducer from "./slices/routeSlice";
import likeReducer from "./slices/likeSlice";
export const store = configureStore({
  reducer: {
    like: likeReducer,
    theme: themeReducer,
    user: userReducer,
    route: routeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
