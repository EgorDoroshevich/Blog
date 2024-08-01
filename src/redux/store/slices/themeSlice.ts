import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Theme } from "../../../components/config";

type InitialState = {
  themeValue: Theme;
};
const initialState = {
  themeValue: Theme.light,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeValue: (state, action: PayloadAction<Theme>) => {
      state.themeValue = action.payload;
    },
  },
});

export const { setThemeValue } = themeSlice.actions;

export const ThemeSelectors = {
  getIsTheme: (state: RootState) => state.themeReducer.themeValue,
};
export default themeSlice.reducer;
