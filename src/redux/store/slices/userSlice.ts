import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type InitialState = {
  email: string;
  token: string;
  id: string;
};
const initialState: InitialState = {
  email: "",
  token: "",
  id: "",
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
      state.id = action.payload;
      state.token = action.payload;
    },
  },
});

export const {setUser} = userSlice.actions;

export const UserSelectors = {
    getEmail:(state:RootState) => state.UserReducer.email,
    getId:(state:RootState) => state.UserReducer.id,
    getToken:(state:RootState) => state.UserReducer.token,

}
export default userSlice.reducer;