import { Route, Routes } from 'react-router-dom';

import NavBar from '../components/NavBar';
import { DCPage, HeroPage, MarvelPage, SearchPage } from '../pages';

const HeroesRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DCPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="hero/:heroID" element={<HeroPage />} />
      </Routes>
    </>
  );
};

export default HeroesRoutes;
