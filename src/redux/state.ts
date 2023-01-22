// store - OOP

import profileReducer, {addPostCreator, updateNewPostTextCreator} from "./profile-reducer";
import dialogsReducer, {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsPropsType = {
    id: number
    name: string
}
export type MessagesPropsType = {
    id: number
    message: string
}
export type FriendsType = {
    id: number
    name: string
}
export type RootStateType = {
    profilePage: {
        posts: PostDataType[]
        newPostText: string
    }
    dialogsPage: {
        dialogs: DialogsPropsType[]
        messages: MessagesPropsType[]
        newMessageBody: string
    }
    sidebar: {
        friends: FriendsType[]
    }
}
export type StoreType = {
    _state: RootStateType
    _callSubscriber: (rootState: RootStateType) => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionTypes) => void
}

export type ActionTypes = ReturnType<typeof addPostCreator>
    | ReturnType<typeof updateNewPostTextCreator>
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello World', likesCount: 15},
                {id: 2, message: 'Goodbye World', likesCount: 23},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Mishka'},
                {id: 2, name: 'Vizix'},
                {id: 3, name: 'Kibot'},
                {id: 4, name: 'Burn'},
                {id: 5, name: 'Zveklas'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo-Yo'},
                {id: 5, message: 'UwU'}
            ],
            newMessageBody: ''
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Mishka'},
                {id: 1, name: 'Sasha'},
                {id: 1, name: 'Masha'}
            ]
        }
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer // патерн observer
    },
    _callSubscriber(rootState: RootStateType) {
        console.log('state changed')
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}