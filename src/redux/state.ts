// store - OOP

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_DIALOG_MESSAGE = 'ADD-DIALOG-MESSAGE';
const UPDATE_NEW_DIALOG_MESSAGE_TEXT = 'UPDATE-NEW-DIALOG-MESSAGE-TEXT';

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
        newDialogMessageText: string
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

export type ActionTypes = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof addDialogMessage>
    | ReturnType<typeof updateNewDialogMessageTextActionCreator>

export const addPostActionCreator = () => ({
    type: ADD_POST
} as const)

export const updateNewPostTextActionCreator = (postText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: postText
} as const)

export const addDialogMessage = () => ({
    type: ADD_DIALOG_MESSAGE
} as const)

export const updateNewDialogMessageTextActionCreator = (messageText: string) => ({
    type: UPDATE_NEW_DIALOG_MESSAGE_TEXT,
    newText: messageText
} as const)

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello World', likesCount: 15},
                {id: 2, message: 'Goodbye World', likesCount: 23},
            ],
            newPostText: 'it-kamastutra'
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
            newDialogMessageText: 'hello'
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
        switch (action.type) {
            case ADD_POST:
                if (this._state.profilePage.newPostText.trim()) {
                    const newPost: PostDataType = {
                        id: new Date().getTime(),
                        message: this._state.profilePage.newPostText.trim(),
                        likesCount: 0
                    }
                    this._state.profilePage.posts.push(newPost)
                    this._state.profilePage.newPostText = ''
                    this._callSubscriber(this._state)
                }
                break;
            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.newText
                this._callSubscriber(this._state)
                break;
            case ADD_DIALOG_MESSAGE:
                const newMessage: MessagesPropsType = {
                    id: new Date().getTime(),
                    message: this._state.dialogsPage.newDialogMessageText
                }
                this._state.dialogsPage.messages.push(newMessage)
                this._state.dialogsPage.newDialogMessageText = ''
                this._callSubscriber(this._state)
                break;
            case "UPDATE-NEW-DIALOG-MESSAGE-TEXT":
                this._state.dialogsPage.newDialogMessageText = action.newText
                this._callSubscriber(this._state)
                break;
            default:
                console.log('Something go wrong')
        }
    }
}