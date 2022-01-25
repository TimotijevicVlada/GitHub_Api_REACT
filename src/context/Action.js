export const FetchUser = () => ({
    type: "FETCH_USER"
})

export const FetchSuccess = (user) => ({
    type: "FETCH_USER_SUCCESS",
    payload: user
})

export const FetchFailure = () => ({
    type: "FETCH_USER_FAILURE"
})

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