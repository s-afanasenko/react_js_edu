import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { themeReducer, themeInitialState, dataReducer, dataInitialState } from "./reducers/";

const rootReducer = combineReducers({
    theme: themeReducer,
    data: dataReducer
});

export default createStore(
    rootReducer,
    {
        theme: themeInitialState,
        data: dataInitialState
    },
    applyMiddleware(thunkMiddleware)
);
