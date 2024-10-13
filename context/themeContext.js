import { createContext, useState } from 'react';
import { theme } from '../helper';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(theme.light);

  const toggleTheme = () => {
    if (currentTheme === theme.light) {
      setCurrentTheme(theme.dark);
      return;
    }
    setCurrentTheme(theme.light);
  };

  return (
    <ThemeContext.Provider value={[currentTheme, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
