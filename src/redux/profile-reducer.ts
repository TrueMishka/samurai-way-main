import {ActionTypes} from "./redux-store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE'

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
    newPostText: ''
}

export type ProfilePageStateType = typeof initialState

const profileReducer = (state: ProfilePageStateType = initialState, action: ActionTypes): ProfilePageStateType => {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText.trim()) {
                const newPost: PostDataType = {
                    id: new Date().getTime(),
                    message: state.newPostText.trim(),
                    likesCount: 0
                }
                return {...state, posts: [...state.posts, newPost], newPostText: ''}
            }
            return state
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText}
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export const addPostCreator = () => ({type: ADD_POST} as const)
export const updateNewPostTextCreator = (postText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: postText
} as const)
export  const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)

export default profileReducer