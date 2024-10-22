import React, { useEffect, useState } from "react";

import "./App.css";
import { PostSize, Theme } from "./components/config";
import { ThemeProvider } from "./context/Theme";
import AppRouter from "./components/Router/Router";
import { useDispatch, useSelector } from "react-redux";
import { ThemeSelectors, setThemeValue } from "./redux/store/slices/themeSlice";
import app from "./firebase";

function App() {
  const dispath = useDispatch();

  const themeValue = useSelector(ThemeSelectors.getIsTheme);

  const onChangeTheme = (value: Theme) => () => {
    dispath(setThemeValue(value));
  };
  return (
    <div>
      <ThemeProvider onChangeTheme={onChangeTheme} themeValue={themeValue}>
        <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
