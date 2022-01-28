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
        //For some reason, my TOKEN return error when I insert it in the header of request down bellow. I will try to find solution for this.
        // const headers = {
        //     "Authorization": `token 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`
        // }
        const url = "https://api.github.com/users/TimotijevicVlada/repos?per_page=40";
        try {
            const response = await axios.get(url);
            dispatch({ type: "FETCH_REPOS_SUCCESS", payload: response.data });
        } catch (error) {
            console.log(error);
            dispatch({ type: "FETCH_REPOS_FAILURE" });
        }
    }
}