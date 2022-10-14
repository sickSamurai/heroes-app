import { AuthAction, AuthActionType } from '../types/AuthAction';
import { AuthState } from '../types/AuthState';

const authReducer = (actualState: AuthState, action: AuthAction) => {
  switch (action.type) {
    case AuthActionType.Login:
      return { isLogged: true, user: action.payload } as AuthState;
    case AuthActionType.Logout:
      return { isLogged: false, user: actualState } as AuthState;
    default:
      throw new Error("Invalid Action Type");
  }
};

export default authReducer;
