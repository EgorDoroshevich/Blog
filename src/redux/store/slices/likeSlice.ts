import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type InitialState = {
  isLike: boolean;
};

const initialState: InitialState = {
  isLike: false,
};

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    setLike: (state, action: PayloadAction<boolean>) => {
      state.isLike = action.payload;
    },
  },
});

export const { setLike } = likeSlice.actions;

export const LikeSelectors = {
  getIsLike: (state: RootState) => state.likeReducer.isLike,
};

export default likeSlice.reducer;
