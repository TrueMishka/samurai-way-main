/*let rerenderEntireTree = (rootState: RootStateType) => {
    console.log('state changed')
}*/


/*
export const rootState: any = {
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
}*/

// store - OOP

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

export type StoreType = {
    _rootState: RootStateType
    getState: () => RootStateType
    updateNewPostText: (newText: string) => void
    addPost: () => void
    subscribe: (observer: () => void) => void
    rerenderEntireTree: (rootState: RootStateType) => void
}

export const store: StoreType = {
    _rootState: {
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
    },
    getState() {
       return this._rootState
    },
    updateNewPostText(newText: string) {
        this._rootState.profilePage.newPostText = newText
        this.rerenderEntireTree(this._rootState)
    },
    addPost() {
        if (this._rootState.profilePage.newPostText) {
            const newPost: PostDataType = {
                id: new Date().getTime(),
                message: this._rootState.profilePage.newPostText,
                likesCount: 0
            }
            this._rootState.profilePage.posts.push(newPost)
            this._rootState.profilePage.newPostText = ''
            this.rerenderEntireTree(this._rootState)
        }
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer // патерн observer
    },
    rerenderEntireTree(rootState: RootStateType) {
        console.log('state changed')
    }
}