import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type RouteProps = {
  toggle: boolean;
};

const initialState: RouteProps = {
  toggle: false,
};

const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    setRoute: (state, action: PayloadAction<boolean>) => {
      state.toggle = action.payload;
    },
  },
});

export const { setRoute } = routeSlice.actions;

export const RouteSelectors = {
  getRoute: (state: RootState) => state.routeReducer.toggle,
};

export default routeSlice.reducer;
