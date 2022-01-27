import axios from 'axios';

export const FetchProfileRepos = () => ({
    type: "FETCH_PROFILE_REPOS"
})

export const FetchProfileReposSuccess = (repos) => ({
    type: "FETCH_PROFILE_REPOS_SUCCESS",
    payload: repos
})

export const FetchProfileReposFailure = () => ({
    type: "FETCH_PROFILE_REPOS_FAILURE"
})

//Function that get the repos data and set to the state
export const fetchProfileRepos = (value) => {
    return async (dispatch) => {
        dispatch({ type: "FETCH_PROFILE_REPOS" });

        try {
            const response = await axios.get(`https://api.github.com/users/${value}/repos`);
            console.log(response.data);
            dispatch({
                type: "FETCH_PROFILE_REPOS_SUCCESS",
                payload: response.data
            });
        } catch (error) {
            dispatch({ type: "FETCH_PROFILE_REPOS_FAILURE", error });
        }
    }
}