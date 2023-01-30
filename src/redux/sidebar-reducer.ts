import {ActionTypes, FriendsType} from "./store";

type StateType = {
    friends: FriendsType[]
}

const initialState: StateType = {
    friends: [
        {id: 1, name: 'Mishka'},
        {id: 1, name: 'Sasha'},
        {id: 1, name: 'Masha'}
    ]
}

const sidebarReducer = (state: StateType = initialState, action: ActionTypes) => {

    return state
}

export default sidebarReducer