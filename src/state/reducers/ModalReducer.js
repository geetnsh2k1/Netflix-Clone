const initialState = {
    open: false,
    movie_id: null,
}

const ModalReducer = (state=initialState, action) => {
    switch (action.type) {
        case "OPEN": return {
            ...state,
            open: true,
        }
        case "CLOSE": return {
            ...state,
            open: false,
        }
        case "SET": return {
            ...state,
            movie_id: action.movie_id,
        }
        default : return state
    }
}

export default ModalReducer