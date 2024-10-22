import { createContext, useContext } from "react";
import { Theme } from "../../components/config";

export const initialValues = {
  themeValue: Theme.dark,
  onChangeTheme: (_: Theme) => () => {},
};

const ThemeContext = createContext(initialValues);

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeContext;
