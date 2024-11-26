import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface UserState {
  email: string;
  password: string | null;
  token?: string | null;
  id?: string | null;
  name: string;
  auth: any;
}

const initialState: UserState = {
  auth: null,
  password: null,
  email: "",
  token: null,
  id: null,
  name: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserSignIn: (
      state: any,
      action: PayloadAction<{
        email: string;
        id: string;
        token: string;
        name?: string;
      }>
    ) => {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.name = action.payload.name;
    },
    setUserSignUp: (
      state,
      action: PayloadAction<{
        auth: any;
        email: string;
        password: string;
        name: string;
      }>
    ) => {
      state.auth = action.payload.auth;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.name = action.payload.name;
    },
    removeUser: (state) => {
      state.email = "";
      state.id = null;
      state.token = null;
      // state.name = "";
      // state.password = null;
    },
  },
});

export const { setUserSignIn, removeUser, setUserSignUp } = userSlice.actions;

// Селекторы для получения данных пользователя из состояния
export const UserSelectors = {
  getUser: createSelector(
    (state: RootState) => state.user,
    (user) => ({
      email: user.email,
      password: user.password,
      id: user.id,
      name: user.name,
      auth: user.auth,
      token: user.token,
    })
  ),
};

export default userSlice.reducer;
