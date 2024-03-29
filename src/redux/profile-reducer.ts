import {ActionTypes} from "./redux-store";
import {API} from "../api/api";
import {Dispatch} from "redux";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_USER_STATUS = 'SET-USER-STATUS'

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}

export type ProfileType = {
    userId: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

const initialState = {
    profile: {} as ProfileType,
    posts: [
        {id: 1, message: 'Hello World', likesCount: 15},
        {id: 2, message: 'Goodbye World', likesCount: 23},
    ] as PostDataType[],
    status: ''
}

export type ProfilePageStateType = typeof initialState

const profileReducer = (state: ProfilePageStateType = initialState, action: ActionTypes): ProfilePageStateType => {
    switch (action.type) {
        case ADD_POST:
            if (action.newPostText.trim()) {
                const newPost: PostDataType = {
                    id: new Date().getTime(),
                    message: action.newPostText.trim(),
                    likesCount: 0
                }
                return {...state, posts: [...state.posts, newPost]}
            }
            return state
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_USER_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}

// ActionCreators
export const addPostCreator = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const setUserProfileAC = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const setUserStatusAC = (status: string) => ({type: SET_USER_STATUS, status} as const)

// ThunkCreators
export const getUserProfileAC = (userId: number) => {
    return (dispatch: any) => {
        API.profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfileAC(data))
            })
    }
}
export const getStatusTC = (userId: number) => (dispatch: Dispatch) => {
    API.profileAPI.getStatus(userId)
        .then(data => {
            dispatch(setUserStatusAC(data))
        })
}
export const updateStatusTC = (status: string) => (dispatch: Dispatch) => {
    API.profileAPI.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserStatusAC(status))
            }
        })
}

export default profileReducer