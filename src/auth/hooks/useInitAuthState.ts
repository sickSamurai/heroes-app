import { AuthState } from '../types/AuthState';

export const useInitAuthState = () => {
  const userData = localStorage.getItem("user");

  let initState: AuthState;

  initState = userData ? { isLogged: true, user: JSON.parse(userData) } : {};

  return initState;
};
