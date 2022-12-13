import { createContext } from "react";

const themes = {
  light: "ligth",
  nigth: "nigth",
};

const ThemeContext = createContext(themes.light);

export default { themes, ThemeContext };
