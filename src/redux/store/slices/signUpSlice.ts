import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { setEmail, setPassword } from "./signInSlice";
import { RootState } from "../store";

type InitialState = {
  name: string;
  email: string;
  password: string;
  confirm: string;
};
const initialState: InitialState = {
  name: "",
  email: "",
  password: "",
  confirm: "",
};

const signUpSlice = createSlice({
  name: "Sign Up",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmailSignUp: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPasswordSignUp: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action: PayloadAction<string>) => {
      state.confirm = action.payload;
    },
  },
});

export const {
  setName,
  setEmailSignUp,
  setPasswordSignUp,
  setConfirmPassword,
} = signUpSlice.actions;

export const SignUpSelectors = {
  getName: (state: RootState) => state.signUpReducer.name,
  getEmail: (state: RootState) => state.signUpReducer.email,
  getPassword: (state: RootState) => state.signUpReducer.password,
  getConfirmPassword: (state: RootState) => state.signUpReducer.confirm,
};

export default signUpSlice.reducer;
