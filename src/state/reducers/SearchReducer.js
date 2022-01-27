const INITIAL_STATE = {
    value: "",
    error: false
};

const SearchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'UPDATE_INPUT_VALUE':
            return {
                value: action.payload,
                error: false
            };
        case 'UPDATE_INPUT_ERROR':
            return {
                ...state,
                error: true
            };

        default:
            return state;
    }

};

export default SearchReducer;