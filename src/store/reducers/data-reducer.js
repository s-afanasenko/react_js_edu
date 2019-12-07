import { dataActionsConstants } from "../constants/";

export const dataInitialState = {
    item: null,
    isLoading: false,
    message: null
};

export function dataReducer (state = dataInitialState, action) {
    switch (action.type) {
    case dataActionsConstants.FETCH_STARTED:
        return {
            ...state,
            isLoading: true
        };
    case dataActionsConstants.FETCH_SUCCEEDED:
        return {
            ...state,
            item: action.payload,
            isLoading: false,
            message: {
                type: "success",
                text: "Got one. 806 to go."
            }
        };
    case dataActionsConstants.FETCH_FAILD:
        return {
            ...state,
            item: null,
            isLoading: false,
            message: {
                type: "danger",
                text: action.payload.message || action.payload
            }
        };
    default:
        return state;
    }
}
