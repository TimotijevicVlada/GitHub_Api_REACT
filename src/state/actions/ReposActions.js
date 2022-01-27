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

//Function that get the repos data and set to the state
export const fetchRepos = () => {
    return async (dispatch) => {
        dispatch({ type: "FETCH_REPOS" });
        // const headers = {
        //     "Authorization": `Token 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`
        // }
        const url = "https://api.github.com/users/TimotijevicVlada/repos";
        try {
            const response = await axios.get(url);
            console.log(response);
            dispatch({ type: "FETCH_REPOS_SUCCESS", payload: response.data });

        } catch (error) {
            dispatch({ type: "FETCH_REPOS_FAILURE", error });
        }
    }
}