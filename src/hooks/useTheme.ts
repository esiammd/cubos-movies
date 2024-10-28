import { useContext } from 'react';

import ThemeContext, { ThemeContextProps } from '../contexts/ThemeContext';

function useTheme(): ThemeContextProps {
  const context = useContext(ThemeContext);
  return context;
}

export default useTheme;
