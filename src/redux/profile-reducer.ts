import {ActionTypes, PostDataType} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

type StateType = {
    posts: PostDataType[]
    newPostText: string
}

const initialState: StateType = {
    posts: [
        {id: 1, message: 'Hello World', likesCount: 15},
        {id: 2, message: 'Goodbye World', likesCount: 23},
    ],
    newPostText: ''
}

const profileReducer = (state: StateType = initialState, action: ActionTypes): StateType => {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText.trim()) {
                const newPost: PostDataType = {
                    id: new Date().getTime(),
                    message: state.newPostText.trim(),
                    likesCount: 0
                }
                state.posts.push(newPost)
                state.newPostText = ''
            }
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
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