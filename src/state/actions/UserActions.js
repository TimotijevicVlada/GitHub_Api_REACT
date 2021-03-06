import axios from "axios"

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

//Function that get the user data and set to the state
export const fetchUser = () => {
    return async (dispatch) => {
        dispatch({ type: "FETCH_USER" });
        //For some reason, my TOKEN return error when I insert it in the header of request down bellow. I will try to find solution for this.
        // const headers = {
        //     "Authorization": "token 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"
        // }
        const url = "https://api.github.com/users/TimotijevicVlada";
        try {
            const response = await axios.get(url);
            dispatch({ type: "FETCH_USER_SUCCESS", payload: response.data });
        } catch (error) {
            console.log(error);
            dispatch({ type: "FETCH_USER_FAILURE" });
        }
    }
}
