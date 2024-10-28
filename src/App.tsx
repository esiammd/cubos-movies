import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './AppRoutes';

import CustomThemeProvider from './contexts/CustomThemeProvider';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <CustomThemeProvider>
      <GlobalStyle />

      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </CustomThemeProvider>
  );
};

export default App;
