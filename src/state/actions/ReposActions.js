import axios from 'axios';

export const FetchRepos = () => ({
    type: "FETCH_REPOS"
})

export const FetchReposSuccess = (repos) => ({
    type: "FETCH_REPOS_SUCCESS",
    payload: repos
})

export const FetchReposFailure = () => ({
    type: "FETCH_REPOS_FAILURE"
})

export const fetchRepos = () => {

    return async (dispatch) => {
        dispatch({ type: "FETCH_REPOS" });
        // const headers = {
        //     "Authorization": `token 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`
        // }
        try {
            const response = await axios.get("https://api.github.com/users/TimotijevicVlada/repos");
            console.log(response.data);
            dispatch({ type: "FETCH_REPOS_SUCCESS", payload: response.data });
        } catch (error) {
            dispatch({ type: "FETCH_REPOS_FAILURE", error });
        }
    }
}