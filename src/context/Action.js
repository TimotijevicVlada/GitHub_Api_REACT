export const FetchUser = () => ({
    type: "FETCH_USER"
})

export const FetchSuccess = (user) => ({
    type: "FETCH_SUCCESS",
    payload: user
})

export const FetchFailure = () => ({
    type: "FETCH_FAILURE"
})