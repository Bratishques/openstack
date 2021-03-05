import { Action } from "../actions";
import { initialState, Store } from "../store";

export function changeTitle(
    state: Store = initialState,
    action: Action
): Store {
    switch (action.type) {
        case "CHANGE_TITLE": {
            return {
                ...state,
                title: action.data
            };
		}
		default: {
			return state;
		}
    }
}