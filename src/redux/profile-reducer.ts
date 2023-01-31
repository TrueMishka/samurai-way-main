import {ActionTypes} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}

const initialState = {
    posts: [
        {id: 1, message: 'Hello World', likesCount: 15},
        {id: 2, message: 'Goodbye World', likesCount: 23},
    ] as PostDataType[],
    newPostText: ''
}

export type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
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
        default:
            return state
    }
}

export const addPostCreator = () => ({type: ADD_POST} as const)
export const updateNewPostTextCreator = (postText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: postText
} as const)

export default profileReducer