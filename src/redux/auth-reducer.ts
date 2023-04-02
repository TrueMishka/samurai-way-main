import {ActionTypes, AppDispatch, AppThunk} from './redux-store';
import {API} from 'api/api';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'SET-USER-DATA'
const RESET_USER_AUTH_DATA = 'RESET-USER-AUTH-DATA'

export type AuthStateType = {
    data: {
        userId: number | null
        email: string | null
        login: string | null
    },
    isAuth: boolean
}

const initialState = {
    data: {
        userId: null,
        email: null,
        login: null
    },
    isAuth: false
}

const authReducer = (state: AuthStateType = initialState, action: ActionTypes): AuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, data: {...action.payload}, isAuth: true}
        case RESET_USER_AUTH_DATA:
            return {...state, ...initialState}
        default:
            return state
    }
}

// Action
export const setAuthUserData = (userId: number, email: string, login: string, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {userId, email, login},
        isAuth: isAuth
    } as const
}
export const resetAuthUserData = () => {
    return {
        type: RESET_USER_AUTH_DATA
    } as const
}

// Thunk
export const getAuthUserData = (): AppThunk => {
    return (dispatch: AppDispatch) => {
        return API.authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    console.log(data.data)
                    dispatch(setAuthUserData(id, email, login, true))
                }
            })
    }
}

export const login = (email: string, password: string, rememberMe: boolean = false): AppThunk => (dispatch: AppDispatch) => {
    API.authAPI.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                const textError = data.messages.length > 0 ? data.messages[0] : 'some error'
                dispatch(stopSubmit('login', {_error: textError}))
            }
        })
}

export const logout = (): AppThunk => (dispatch: AppDispatch) => {
    API.authAPI.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(resetAuthUserData())
            }
        })
}

export default authReducer