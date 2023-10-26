/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeMessage = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState(initialTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
