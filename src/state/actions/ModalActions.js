export const OPEN = (action) => {
    return (dispatch) => {
        dispatch({
            type: "OPEN", 
        })
    }
}

export const CLOSE = (action) => {
    return (dispatch) => {
        dispatch({
            type: "CLOSE",
        })
    }
}

export const SET = (action) => {
    return (dispatch) => {
        dispatch({
            type: "SET", 
            movie_id: action.movie_id,
        })
    }
}