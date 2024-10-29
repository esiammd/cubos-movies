import { useCallback } from 'react';
import { ThemeProvider } from 'styled-components';

import ThemeContext from './ThemeContext';
import usePersistedState from '../hooks/usePersistedState';

import themes, { ThemeOptions } from '../styles/themes';

interface CustomThemeProviderProps {
  children: React.ReactNode;
}

const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = usePersistedState<ThemeOptions>('theme', 'dark');

  const toggleTheme = useCallback(() => {
    setTheme(state => (state === 'dark' ? 'light' : 'dark'));
  }, [setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default CustomThemeProvider;
