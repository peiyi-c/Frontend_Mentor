/* eslint-disable react/prop-types */
import React, { useState } from "react";

export const ThemeContext = React.createContext();

export const ThemeMessage = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState(initialTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
