import {ActionTypes} from "./redux-store";

export type FriendType = {
    id: number
    name: string
}

const initialState = {
    friends: [
        {id: 1, name: 'Mishka'},
        {id: 1, name: 'Sasha'},
        {id: 1, name: 'Masha'}
    ] as FriendType[]
}

export type InitialStateType = typeof initialState

const sidebarReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {

    return state
}

export default sidebarReducer