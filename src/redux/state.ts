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
    }
    dialogsPage: {
        dialogs: DialogsPropsType[]
        messages: MessagesPropsType[]
    }
    sidebar: {
        friends: FriendsType[]
    }
}

export const rootState: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello World', likesCount: 15},
            {id: 2, message: 'Goodbye World', likesCount: 23},
        ]
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
            {id: 1, message: 'How are you?'},
            {id: 1, message: 'Yo'},
            {id: 1, message: 'Yo-Yo'},
            {id: 1, message: 'UwU'}
        ]
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Mishka'},
            {id: 1, name: 'Sasha'},
            {id: 1, name: 'Masha'}
        ]
    }
}