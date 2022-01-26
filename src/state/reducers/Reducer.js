const Reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_USER":
            return {
                user: [],
                userRepos: [],
                userIsFetching: true,
                reposIsFetching: false,
                userError: false,
                reposError: false
            };
        case "FETCH_USER_SUCCESS":
            return {
                user: action.payload,
                userRepos: [],
                userIsFetching: false,
                reposIsFetching: false,
                userError: false,
                reposError: false
            };
        case "FETCH_USER_FAILURE":
            return {
                user: [],
                userRepos: [],
                userIsFetching: false,
                reposIsFetching: false,
                userError: true,
                reposError: false
            };
            case "FETCH_REPOS":
                return {
                    user: state.user,
                    userRepos: [],
                    userIsFetching: state.userIsFetching,
                    reposIsFetching: true,
                    userError: state.userError,
                    reposError: false
                };
            case "FETCH_REPOS_SUCCESS":
                return {
                    user: state.user,
                    userRepos: action.payload,
                    userIsFetching: state.userIsFetching,
                    reposIsFetching: false,
                    userError: state.userError,
                    reposError: false
                };
            case "FETCH_REPOS_FAILURE":
                return {
                    user: state.user,
                    userRepos: [],
                    userIsFetching: state.userIsFetching,
                    reposIsFetching: false,
                    userError: state.userError,
                    reposError: true
                };
        default:
            return state;
    }
};

export default Reducer;