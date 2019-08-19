import { all, takeLatest, call, put, select } from 'redux-saga/effects'
import api from './../../services/api'
import * as LoginActions from './../actions/login'
import * as RepositoriesActions from './../actions/repositories'
import { navigate } from './../../services/navigation'

function* login(action) {
    try {
        
        const { username } = action.payload

        yield api.get(`/users/${username}`)

        yield put(LoginActions.loginSuccess(username))

        navigate('Repositories')
    } catch (err) {
        yield put(LoginActions.loginFailure())
    }
}
function* repositories() {
    try {
      
        const { username } = yield select(state => state.login)

        const response =  yield api.get(`/users/${username}/repos`)

        yield put(RepositoriesActions.repositoriesSuccess(response.data))

    
    } catch (err) {
        yield put(RepositoriesActions.repositoriesFailure())
    }
}

export default function* rootSaga() {
    return yield all([
        takeLatest('LOGIN_REQUEST', login),
        takeLatest('REPOSITORIES_REQUEST', repositories)
    ])
}