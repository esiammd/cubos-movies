import { Outlet } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { LayoutContainer, ContentContainer } from './styles';

const DefaultLayout: React.FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
      <Footer />
    </LayoutContainer>
  );
};

export default DefaultLayout;
