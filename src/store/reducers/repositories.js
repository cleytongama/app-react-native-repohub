const INITIAL_STATE = {
    data: [],
    loading: false,
    error: false
}

const repositories = function (state = INITIAL_STATE, action) {

    switch (action.type) {
        case "REPOSITORIES_REQUEST":
            return { ...state, loading: true }
            
        case "REPOSITORIES_SUCCESS":
            return { ...state, data: action.payload.data, loading: false, error: false }

        case "REPOSITORIES_FAILURE":
            return { ...state, error: true, loading: false }

    }
    return state;
}


export default repositories 