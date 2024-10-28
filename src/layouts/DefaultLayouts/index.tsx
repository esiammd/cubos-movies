import { Outlet } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { LayoutContainer } from './styles';

const DefaultLayouts: React.FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <Footer />
    </LayoutContainer>
  );
};

export default DefaultLayouts;
