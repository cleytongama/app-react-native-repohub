export const repositoriesRequest = (username)=>{
    return {
        type: 'REPOSITORIES_REQUEST',
        payload: { username }
    }
}

export const repositoriesSuccess = (data) => {
    return {
        type: 'REPOSITORIES_SUCCESS',
        payload: { data }
    }
}

export const repositoriesFailure = () => {
    return {
        type: 'REPOSITORIES_FAILURE'
    }
}
