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

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.email = action.payload;
      state.id = action.payload;
      state.token = action.payload;
    },
    removeUser: (state) => {
      state.email = null;
      state.id = null;
      state.token = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

// export const UserSelectors = {
//   getEmail: (state: RootState) => state.UserReducer.email,
//   getId: (state: RootState) => state.UserReducer.id,
//   getToken: (state: RootState) => state.UserReducer.token,
// };
export default userSlice.reducer;
