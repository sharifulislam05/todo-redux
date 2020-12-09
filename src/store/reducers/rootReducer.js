import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import visibilityReducer from "./visibilityReducer";

export const rootReducer = combineReducers({
    todo: todoReducer,
    visibility: visibilityReducer
})