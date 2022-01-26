const INITIAL_STATE = {
    value: ""
};

const SearchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'UPDATE_INPUT_VALUE':
            return {
                value: action.payload
            };

        default:
            return state;
    }

};

export default SearchReducer;