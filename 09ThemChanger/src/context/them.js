import { createContext, useContext } from "react";

// at the time of creation we pass the default variables
export const ThemeContext = createContext({
  themMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemProvider = ThemeContext.Provider;

//custom hook
export default function useTheme() {
  return useContext(ThemeContext);
}

//we can pass variable and function
