const INITIAL_STATE = {
    user: {},  
    isLoading: false,
    error: false,
};

const SearchProfileReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "FETCH_SEARCH_USER":
            return {
                ...state,
                isLoading: true,
                error: false,
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
                error: true
            };
        default:
            return state;
    }
};

export default SearchProfileReducer;