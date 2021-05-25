import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {followReducer} from './reducers/follow.reducer'
import {registerReducer} from './reducers/register.reducer'
import {userReducer} from './reducers/user.reducer'
import {vacationReducer} from './reducers/vacation.reducer'
import thunk from 'redux-thunk'

const allReducers = combineReducers({followReducer,registerReducer,userReducer,vacationReducer});

const middleware= [thunk];

 export const store = createStore(
    allReducers,composeWithDevTools(applyMiddleware(...middleware))
);


