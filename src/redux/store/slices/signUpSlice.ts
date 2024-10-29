import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type InitialState = {
  email: null;
  password: null;
  name: null;
  id: null;
};
const initialState: InitialState = {
  email: null,
  password: null,
  id: null,
  name: null,
};

const signUpSlice = createSlice({
  name: "Sign Up",
  initialState,
  reducers: {
    // setUser: (state: any, action: PayloadAction<string>) => {
    //   state.email = action.payload;
    //   state.token = action.payload;
    //   state.id = action.payload;
    // },
  },
});

// export const { setUser } = signUpSlice.actions;

export const SignUpSelectors = {
  getUser: (state: RootState) => state.user.email,
};

export default signUpSlice.reducer;
