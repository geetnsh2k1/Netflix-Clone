const initialState = {
    user: null,
    getStarted: false,
    email: null,
    isAuthenticaed: false,
}

const UserReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOGIN": return {
            ...state,
            user: action.user,
            email: action.email,
            isAuthenticaed: true,
        }
        case "LOGOUT": return {
            user: null,
            isAuthenticaed: false,
            getStarted: false,
            email: null,
        }
        case "GET_STARTED": return {
            user: null,
            isAuthenticaed: false,
            getStarted: true,
            email: action.email,
        }
        default: return state
    }
}

export default UserReducer