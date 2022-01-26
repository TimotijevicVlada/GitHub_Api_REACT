const INITIAL_STATE = {
    repos: [],
    isFetching: false,
    error: false,
};

const ReposReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
            case "FETCH_REPOS":
                return {
                    repos: [],
                    isFetching: true,
                    error: false
                };
            case "FETCH_REPOS_SUCCESS":
                return {
                    repos: action.payload,
                    isFetching: false,
                    error: false
                };
            case "FETCH_REPOS_FAILURE":
                return {
                    repos: [],
                    isFetching: false,
                    error: true
                };
        default:
            return state;
    }
};

export default ReposReducer;