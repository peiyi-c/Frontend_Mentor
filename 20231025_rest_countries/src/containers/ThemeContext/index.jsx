/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ThemeContext = createContext();

// get initial theme from localStorage or user preference, if none of them is "light" or "dark",
// dedault theme is light
const getLocalStorage = () => {
  let colorMode = localStorage.getItem("colorMode");
  if (colorMode) {
    colorMode = JSON.parse(colorMode);
    if (colorMode === "light" || colorMode === "dark") {
      return colorMode;
    }
  } else {
    return "";
  }
};
const getThemePreference = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const initialTheme = getLocalStorage() || getThemePreference();

export const ThemeMessage = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
