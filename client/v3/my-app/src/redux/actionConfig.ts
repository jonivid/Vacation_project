// import { IVacation } from "./vacationsActions";

export interface IAction {
  type: string; // what am i doing
  payload: any; // what am i sending
}

export const VACATIONS_ACTIONS = {
  ADD_VACATION: "ADD_VACATION",
  VACATION_TO_EDIT: "VACATION_TO_EDIT",
  GET_ALL_VACATIONS: "GET_ALL_VACATIONS",
  DELETE_VACATION: "DELETE_VACATION",
  SET_VACTIONS_CHART_DATA: "SET_VACTIONS_CHART_DATA",
};

export const USER_ACTIONS = {
  LOGGED_IN: "LOGGED_IN",
  LOGGED_OUT: "LOGGED_OUT",
  FOLLOE: "FOLLOW",
  UNFOLLOW: "UNFOLLOW",
};
