/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeMessage = ({ children }) => {
  const [theme, setTheme] = useState("");
  useEffect(() => {
    // get initial theme from localStorage or user preference, if both are null, set theme to light
    const getLocalStorage = () => {
      let colorMode = localStorage.getItem("colorMode");
      if (colorMode !== "") {
        colorMode = JSON.parse(colorMode);
        if (colorMode === "light" || colorMode === "dark") {
          setTheme(colorMode);
        } else {
          getThemePreference();
        }
      } else {
        getThemePreference();
      }
    };
    const getThemePreference = () => {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? setTheme("dark")
        : setTheme("light");
    };
    getLocalStorage();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
