const Reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_USER":
            return {
                user: [],
                isFetching: true,
                error: false,
            };
        case "FETCH_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false,
            };
        case "FETCH_FAILURE":
            return {
                user: [],
                isFetching: false,
                error: true,
            };
        default:
            return state;
    }
};

export default Reducer;