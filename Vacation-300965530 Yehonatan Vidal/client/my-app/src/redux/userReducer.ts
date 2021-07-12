import { IAction, USER_ACTIONS } from "./actionConfig";
import { IUser } from "./userActions";


interface IStateUser {
  user?: IUser;
}
const initUserState: IStateUser = {
  
  
};

export default function userReducer(
  state: IStateUser = initUserState,
  action: IAction
) {
  switch (action.type) {
    case USER_ACTIONS.LOGGED_IN: {
      const { payload } = action;
      return { ...state, user: { ...state.user, ...payload } };
    }
    case USER_ACTIONS.LOGGED_OUT: {
      localStorage.setItem("userToken", '')
      const { payload } = action;
      return { ...state, user: { ...state.user, ...payload } };
    }
    default:
      return state;
  }
}
