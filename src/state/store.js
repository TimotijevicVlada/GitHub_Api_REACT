import {createStore, combineReducers, applyMiddleware} from "redux";
import UserReducer from "./reducers/UserReducer";
import ReposReducer from "./reducers/ReposReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const root = combineReducers({
    user: UserReducer,
    repos: ReposReducer
})

export const store = createStore(root, composeWithDevTools(applyMiddleware(thunk)));