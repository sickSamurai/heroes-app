import { User } from './User';

export type AuthAction = {
  type: AuthActionType;
  payload?: User;
};

export enum AuthActionType {
  Login,
  Logout
}
