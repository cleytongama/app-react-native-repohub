

const INITIAL_STATE = {
    username: null,
    error: false,
    loading: false
}

const login = function (state = INITIAL_STATE, action) {

    switch (action.type) {
        case "LOGIN_REQUEST":
            return {
                ...state,
                loading: true,
                error: false
            }
        case "LOGIN_SUCCESS":
            return {
                ...state,
                username: action.payload.username,
                error: false,
                loading: false
            }
        case "LOGIN_FAILURE":
            return {
                ...state,
                error: true,
                loading: false
            }
    }
    return state
}

export default login