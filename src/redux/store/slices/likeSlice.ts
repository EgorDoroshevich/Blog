import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../store";
import { ref, get, update } from "firebase/database";
import { dbRealtime } from "../../../firebase";

type LikeState = Record<
  string,
  { count: number; users: Record<string, boolean> }
>;

const initialState: LikeState = {};

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    updateLikeState: (
      state,
      action: PayloadAction<{
        postKey: string;
        count: number;
        users: Record<string, boolean>;
      }>
    ) => {
      const { postKey, count, users } = action.payload;
      state[postKey] = { count, users };
    },
  },
});

export const { updateLikeState } = likeSlice.actions;

export const LikeSelectors = {
  getLikeState: (state: RootState, postKey: string) =>
    state.like[postKey] || { count: 0, users: {} },
};

// Async action to toggle like
export const toggleLike =
  ({ postKey, userId }: { postKey: string; userId: string }): AppThunk =>
  async (dispatch) => {
    try {
      const postRef = ref(dbRealtime, `likes/${postKey}`);
      const snapshot = await get(postRef);

      let currentPost = snapshot.exists()
        ? snapshot.val()
        : { count: 0, users: {} };

      const hasLiked = currentPost.users[userId] || false;
      const newCount = hasLiked ? currentPost.count - 1 : currentPost.count + 1;

      const newUsers = {
        ...currentPost.users,
        [userId]: !hasLiked,
      };

      await update(postRef, { count: newCount, users: newUsers });

      // Update the Redux state
      dispatch(
        updateLikeState({
          postKey,
          count: newCount,
          users: newUsers,
        })
      );
    } catch (error) {
      console.error("Error updating like state:", error);
    }
  };

export default likeSlice.reducer;
