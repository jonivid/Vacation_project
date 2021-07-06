import { VACATIONS_ACTIONS } from "./actionConfig";

export interface IVacation {
  destination: string;
  details: string;
  price: any;
  startDate: string;
  endDate: string;
  image: string;
}
export interface IChartData {
  destination: string;
  followers: string;
}

export function addVacation(payload: IVacation) {
  return {
    type: VACATIONS_ACTIONS.ADD_VACATION,
    payload,
  };
}
export function vacationToEdit(payload: IVacation) {
  return {
    type: VACATIONS_ACTIONS.VACATION_TO_EDIT,
    payload,
  };
}

export function getAllVactions(payload: Array<any>) {
  return {
    type: VACATIONS_ACTIONS.GET_ALL_VACATIONS,
    payload,
  };
}
export function deleteVacation(payload: Array<any>) {
  return {
    type: VACATIONS_ACTIONS.DELETE_VACATION,
    payload,
  };
}
export function setVacationsChartData(payload: Array<any>) {
  return {
    type: VACATIONS_ACTIONS.SET_VACTIONS_CHART_DATA,
    payload,
  };
}
