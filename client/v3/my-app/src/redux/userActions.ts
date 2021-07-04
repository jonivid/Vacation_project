import { USER_ACTIONS } from "./actionConfig";

export interface IUser {
  isAdmin: boolean;
  loggedIn: boolean;
}

export const setLoggedIn = (payload: IUser) => {
  return {
    type: USER_ACTIONS.LOGGED_IN,
    payload,
  };
};

export const setLoggedOut = (payload: IUser) => {
  return { type: USER_ACTIONS.LOGGED_OUT,payload };
};
