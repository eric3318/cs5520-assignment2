import { createContext, useState } from 'react';
import { theme } from '../helper';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(theme.one);

  const toggleTheme = () => {
    if (currentTheme === theme.one) {
      setCurrentTheme(theme.two);
      return;
    }
    setCurrentTheme(theme.one);
  };

  return (
    <ThemeContext.Provider value={[currentTheme, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
