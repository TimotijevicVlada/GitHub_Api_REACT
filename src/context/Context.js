import { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
    user: [],
    userRepos: [],
    userIsFetching: false,
    reposIsFetching: false,
    userError: false,
    reposError: false
};

export const UserContext = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);


    return (
        <UserContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}
        >
            {children}
        </UserContext.Provider>
    );
};