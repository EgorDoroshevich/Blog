import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { LikeStatus, PostsList } from "../../../components/config";

type InitialState = {
  like: boolean;
  favorite: PostsList;
};

const initialState: InitialState = {
  like: false,
  favorite: [],
};

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    setLike: (state, action: PayloadAction<boolean>) => {
      state.like = action.payload;
    },
    setFavoriteCard: (state, action: PayloadAction<{ card: PostsList }>) => {
      const { card } = action.payload;
      if (card.map((item) => item.like === true)) {
      } else {
      }
    },
  },
});

export const { setLike, setFavoriteCard } = likeSlice.actions;

export const LikeSelectors = {
  getIsLike: (state: RootState) => state.likeReducer.like,
  getFavorite: (state: RootState) => state.likeReducer.favorite,
};

export default likeSlice.reducer;
