const INITIAL_STATE = {
    user: [],
    isFetching: false,
    error: false,
};

const UserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "FETCH_USER":
            return {
                user: [],
                isFetching: true,
                error: false,
            };
        case "FETCH_USER_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false,
            };
        case "FETCH_USER_FAILURE":
            return {
                user: [],
                isFetching: false,  
                error: true,
            };
        default:
            return state;
    }
};

export default UserReducer;