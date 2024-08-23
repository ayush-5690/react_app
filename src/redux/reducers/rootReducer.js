import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { apiReducer } from "./apiReducer";

export const rootReducer =combineReducers({
    counter:counterReducer,
    student:apiReducer
})