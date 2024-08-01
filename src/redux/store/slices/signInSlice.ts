import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type InitialState = {
  email: string;
  password: string;
};

const initialState: InitialState = {
  email: "",
  password: "",
};

const signInSlice = createSlice({
  name: "Sign In",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { setEmail, setPassword } = signInSlice.actions;

export const SignInSelectors = {
  getEmail: (state: RootState) => {
    return state.signInReducer.email;
  },
  getPassword: (state: RootState) => {
    return state.signInReducer.password;
  },
};

export default signInSlice.reducer;
