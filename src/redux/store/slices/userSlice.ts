import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface UserState {
  email: string | null;
  token: string | null;
  id: string | null;
}

const initialState: UserState = {
  email: null,
  token: null,
  id: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ email: string; id: string; token: string }>
    ) => {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.token = action.payload.token;
    },
    removeUser: (state) => {
      state.email = null;
      state.id = null;
      state.token = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

// Селекторы для получения данных пользователя из состояния
export const UserSelectors = {
  getEmail: (state: RootState) => state.user.email,
  getId: (state: RootState) => state.user.id,
  getToken: (state: RootState) => state.user.token,
};

export default userSlice.reducer;
