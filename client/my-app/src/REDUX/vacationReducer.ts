import { VACATIONS_ACTIONS, IAction } from "./actionConfig";
import { IVacation, IChartData } from "./vacationsActions";

const initVacationState = {
  vacations: [],
  vacationToEdit: {} as IVacation,
  vacationsChartData: [],
};

interface IState {
  vacations: IVacation[];
  vacationToEdit: IVacation;
  vacationsChartData: IChartData[];
}

export default function vacationsReducer(
  state: IState = initVacationState,
  action: IAction
) {
  switch (action.type) {
    case VACATIONS_ACTIONS.ADD_VACATION: {
      const { payload } = action;
      return { ...state, vacations: [...state.vacations, payload] };
    }
    case VACATIONS_ACTIONS.VACATION_TO_EDIT: {
      const { payload } = action;
      return { ...state, vacationToEdit: payload };
    }
    case VACATIONS_ACTIONS.GET_ALL_VACATIONS: {
      const { payload } = action;
      return { ...state, vacations: payload };
    }
    case VACATIONS_ACTIONS.DELETE_VACATION: {
      const { payload } = action;
      return { ...state, vacations: payload };
    }
    case VACATIONS_ACTIONS.SET_VACTIONS_CHART_DATA: {
      const { payload } = action;
      return {
        ...state,
        vacationsChartData: [...state.vacationsChartData, payload],
      };
    }
    default: {
      return state;
    }
  }
}
