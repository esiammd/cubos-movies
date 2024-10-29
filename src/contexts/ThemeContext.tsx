import { createContext } from 'react';

import { ThemeOptions } from '../styles/themes';

export interface ThemeContextProps {
  theme: ThemeOptions;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export default ThemeContext;
