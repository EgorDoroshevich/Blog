import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type InitialState = {
  email: null;
  token: null;
  id: null;
};

const initialState: InitialState = {
  email: null,
  token: null,
  id: null,
};

const signInSlice = createSlice({
  name: "Sign In",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
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

export const { setUser } = signInSlice.actions;

export const SignInSelectors = {
  gerUser: (state: RootState) => {
    return (
      state.signInReducer.email,
      state.signInReducer.token,
      state.signInReducer.id
    );
  },
};

export default signInSlice.reducer;
