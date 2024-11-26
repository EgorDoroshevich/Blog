import React from "react";

import "./App.css";
import { Theme } from "./components/config";
import { ThemeProvider } from "./context/Theme";
import AppRouter from "./components/Router/Router";
import { useDispatch, useSelector } from "react-redux";
import { ThemeSelectors, setThemeValue } from "./redux/store/slices/themeSlice";

function App() {
  const dispatch = useDispatch();

  const themeValue = useSelector(ThemeSelectors.getIsTheme);

  const onChangeTheme = (value: Theme) => () => {
    dispatch(setThemeValue(value));
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
