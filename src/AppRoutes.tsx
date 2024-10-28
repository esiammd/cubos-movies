import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';
import DefaultLayouts from './layouts/DefaultLayouts';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
