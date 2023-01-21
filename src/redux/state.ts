let rerenderEntireTree = (rootState: RootStateType) => {
    console.log('state changed')
}

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

export const addPost = () => {
    if (rootState.profilePage.newPostText) {
        const newPost: PostDataType = {
            id: 5,
            message: rootState.profilePage.newPostText,
            likesCount: 0
        }
        rootState.profilePage.posts.push(newPost)
        rootState.profilePage.newPostText = ''
        rerenderEntireTree(rootState)
    }
}

export const updateNewPostText = (newText: string) => {
    rootState.profilePage.newPostText = newText
    rerenderEntireTree(rootState)
}

export const subscribe = (observer: (rootState: RootStateType) => void) => {
    rerenderEntireTree = observer // патерн observer
}