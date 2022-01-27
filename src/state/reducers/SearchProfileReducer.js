const INITIAL_STATE = {
    user: {},  
    isLoading: false,
    error: null,
};

const SearchProfileReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "FETCH_SEARCH_USER":
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case "FETCH_SEARCH_USER_SUCCESS":
            return {
                ...state,
                user: action.payload,
                isLoading: false,
            };
        case "FETCH_SEARCH_USER_FAILURE":
            return {
                ...state,
                isLoading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default SearchProfileReducer;