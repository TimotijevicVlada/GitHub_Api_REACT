const INITIAL_STATE = {
    repos: [],
    isLoading: false,
    error: null,
};

const ReposReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
            case "FETCH_REPOS":
                return {
                    ...state,
                    isLoading: true,
                    error: null
                };
            case "FETCH_REPOS_SUCCESS":
                return {
                    ...state,
                    repos: action.payload,
                    isLoading: false,
                };
            case "FETCH_REPOS_FAILURE":
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                };
        default:
            return state;
    }
};

export default ReposReducer;