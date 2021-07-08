import { createStore, combineReducers, compose } from "redux";
import vacationsReducer from "./vacationReducer";
import userReducer from "./userReducer";
// using devtools redux
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({ vacationsReducer, userReducer }),
  composeEnhancers()
);
