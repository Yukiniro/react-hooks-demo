import { createContext } from "react";

const themes = {
  light: { bkColor: "#FFF", color: "#000" },
  dark: { bkColor: "#000", color: "#FFF" },
};

const ThemeContext = createContext(themes.light);

export { themes, ThemeContext };
