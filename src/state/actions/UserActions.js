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
        // const headers = {
        //     "Authorization": `token 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`
        // }
        try {
            const response = await axios.get("https://api.github.com/users/TimotijevicVlada");
            console.log(response.data);
            dispatch({ type: "FETCH_USER_SUCCESS", payload: response.data });

        } catch (error) {
            dispatch({ type: "FETCH_USER_FAILURE", error });
        }
    }
}
