/**
 * Provides a React context for managing the application's theme.
 * 
 * The `ThemeProvider` component wraps the application and provides a `theme` state
 * and a `toggleTheme` function to toggle the theme between "light" and "dark".
 * 
 * The current theme is applied to the `body` element's `className` to allow for
 * global styling based on the theme.
 */
import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
