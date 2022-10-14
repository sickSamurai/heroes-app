import { createContext } from 'react';

import { AuthState } from '../types/AuthState';
import { User } from '../types/User';

type ContextObject = {
  authState?: AuthState;
  onLogin?: (user: User) => void;
  onLogout?: () => void;
};

const AuthContext = createContext<ContextObject>({});

export default AuthContext;
