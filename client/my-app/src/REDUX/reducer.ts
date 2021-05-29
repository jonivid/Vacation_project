import { AppState } from "./app-state";
import { Action } from "./action";
import { ActionType } from "./action-type";

// This function is NOT called direcrtly by you
export function reduce(oldAppState: AppState = {answer : 0}, action: Action): AppState {
    // Cloning the oldState (creating a copy)
    const newAppState = { ...oldAppState };

    switch (action.type) {
        case ActionType.Mult:
            let answer = action.payload.num1 * action.payload.num2;
            newAppState.answer = answer;
            break;
    }

    // After returning the new state, it's being published to all subscribers
    // Each component will render itself based on the new state
    return newAppState;
}