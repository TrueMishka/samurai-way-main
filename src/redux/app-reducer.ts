import {ActionTypes, AppDispatch, AppThunk} from './redux-store';
import {getAuthUserData} from "redux/auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS'

export type AppStateType = {
    isInitialized: boolean
}

const initialState = {
    isInitialized: false
}

const appReducer = (state: AppStateType = initialState, action: ActionTypes): AppStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {...state, isInitialized: true}
        default:
            return state
    }
}

// Action
export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS
    } as const
}

// Thunk
export const initializeApp = (): AppThunk => {
    return (dispatch: AppDispatch) => {
        const promise = dispatch(getAuthUserData())

        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess())
            })
    }
}

export default appReducer