import { createContext, useContext } from "react";
import { Theme } from "../../components/config";

const initialValues = {
  themeValue: Theme.light,
  onChangeTheme: (_: Theme) => () => {},
};

const ThemeContext = createContext(initialValues);

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeContext;
