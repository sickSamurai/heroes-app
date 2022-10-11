import { Route, Routes } from 'react-router-dom';

import NavBar from '../components/NavBar';
import { DC, Hero, Marvel, Search } from '../pages';

const HeroesRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="marvel" element={<Marvel />} />
        <Route path="dc" element={<DC />} />
        <Route path="search" element={<Search />} />
        <Route path="hero" element={<Hero />} />
      </Routes>
    </>
  );
};

export default HeroesRoutes;
