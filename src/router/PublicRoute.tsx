import React, { useContext } from 'react';

import AuthContext from '../auth/context/AuthContext';
import HeroesRoutes from '../heroes/routes/HeroesRoutes';

type Props = {
  children: JSX.Element;
};

export const PublicRoute = ({ children }: Props) => {
  const { authState } = useContext(AuthContext);
  return authState?.isLogged ? <HeroesRoutes /> : children;
};
