import axios from "axios"

export const FetchProfile = () => ({
    type: "FETCH_SEARCH_USER"
})

export const FetchSuccessProfile = (user) => ({
    type: "FETCH_SEARCH_USER_SUCCESS",
    payload: user
})

export const FetchFailureProfile = () => ({
    type: "FETCH_SEARCH_USER_FAILURE"
})

export const fetchUserProfile = (value) => {
    return async (dispatch) => {
            dispatch({ type: "FETCH_SEARCH_USER" });
        try {
            const response = await axios.get(`https://api.github.com/users/${value}`);
            console.log(response.data);
            dispatch({ type: "FETCH_SEARCH_USER_SUCCESS", payload: response.data });
        } catch (error) {
            console.log(error);
            dispatch({ type: "FETCH_SEARCH_USER_FAILURE", error });
        }
    }
}