import React, { useReducer } from 'react';

import { useInitAuthState } from '../hooks/useInitAuthState';
import { AuthActionType } from '../types/AuthAction';
import { User } from '../types/User';
import AuthContext from './AuthContext';
import authReducer from './authReducer';

type Props = {
  children: JSX.Element;
};

export const AuthProvider = ({ children }: Props) => {
  const initState = useInitAuthState();
  const [authState, dispatch] = useReducer(authReducer, initState);

  const onLogin = (user: User) => {
    dispatch({ type: AuthActionType.Login, payload: user });
    localStorage.setItem("user", JSON.stringify(user));
  };

  const onLogout = () => {
    dispatch({ type: AuthActionType.Logout });
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ authState, onLogin, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
