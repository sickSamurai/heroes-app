import { User } from './User';

export type AuthState = {
  user?: User;
  isLogged?: boolean;
};
