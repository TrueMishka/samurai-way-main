import {ActionTypes} from "./redux-store";
import {API} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA'

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
            return {...state, data: {...action.data}, isAuth: true}
        default:
            return state
    }
}

// ActionCreators
export const setAuthUserData = (userId: number, email: string, login: string) => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login}
    } as const
}

// ThunkCreators
export const getAuthUserData = () => {
    return (dispatch: any) => {
        API.authAPI.auth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }
}

export default authReducer