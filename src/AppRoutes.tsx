import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import DefaultLayout from './layouts/DefaultLayout';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
