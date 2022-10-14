import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import AuthContext from '../auth/context/AuthContext';
import { ForbiddenPage } from '../auth/pages/Forbidden';

type Props = {
  children: JSX.Element;
};

export const PrivateRoute = ({ children }: Props) => {
  const { authState } = useContext(AuthContext);
  const { pathname, search } = useLocation();
  const lastPath = `${pathname}${search}`;
  localStorage.setItem("lastPath", lastPath);

  if (authState?.isLogged) return <>{children}</>;
  else return <ForbiddenPage />;
};
