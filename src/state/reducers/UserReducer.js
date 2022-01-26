const INITIAL_STATE = {
    user: [],
    isLoading: false,
    error: null,
};

const UserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "FETCH_USER":
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case "FETCH_USER_SUCCESS":
            return {
                ...state,
                user: action.payload,
                isLoading: false,
            };
        case "FETCH_USER_FAILURE":
            return {
                ...state,
                isLoading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default UserReducer;