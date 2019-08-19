export const loginRequest = (username)=>{
    return {
        type: 'LOGIN_REQUEST',
        payload: { username }
    }
}

export const loginSuccess = (username) => {
    return {
        type: 'LOGIN_SUCCESS',
        payload: { username }
    }
}
export const loginFailure = () => {
    return {
        type: 'LOGIN_FAILURE'
    }
}
