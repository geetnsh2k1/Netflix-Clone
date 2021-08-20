export const LOGIN = (action) => {
    return (dispatch) => {
        dispatch({
            type: "LOGIN",
            user: action.user,
            email: action.email,
        })
    }
}

export const LOGOUT = (action) => {
    return (dispatch) => {
        dispatch({
            type: "LOGOUT",
        })
    }
}

export const GET_STARTED = (action) => {
    return (dispatch) => {
        dispatch({
            type: "GET_STARTED",
            email: action.email,
        })
    }
}