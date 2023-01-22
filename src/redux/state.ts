// store - OOP

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

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

export const addPostCreator = () => ({
    type: ADD_POST
} as const)

export const updateNewPostTextCreator = (postText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: postText
} as const)

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
} as const)

export const updateNewMessageBodyCreator = (messageText: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: messageText
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
            case SEND_MESSAGE:
                const newMessage: MessagesPropsType = {
                    id: new Date().getTime(),
                    message: this._state.dialogsPage.newMessageBody
                }
                this._state.dialogsPage.messages.push(newMessage)
                this._state.dialogsPage.newMessageBody = ''
                this._callSubscriber(this._state)
                break;
            case UPDATE_NEW_MESSAGE_BODY:
                this._state.dialogsPage.newMessageBody = action.body
                this._callSubscriber(this._state)
                break;
            default:
                console.log('Something go wrong')
        }
    }
}