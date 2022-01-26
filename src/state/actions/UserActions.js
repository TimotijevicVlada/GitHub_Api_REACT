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

export const fetchUser = () => {

    return async (dispatch, getState) => {
        dispatch({ type: "FETCH_USER" });
        // const headers = {
        //     "Authorization": `token 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`
        // }
        try {
            const response = await axios.get("https://api.github.com/users/TimotijevicVlada");
            console.log(response.data);
            dispatch({ type: "FETCH_USER_SUCCESS", payload: response.data });
        } catch (err) {
            console.log(err);
            dispatch({ type: "FETCH_USER_FAILURE" });
        }
    }
}
