import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

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
export type RootStateType = {
    profilePage: {
        posts: PostDataType[]
    }
    dialogsPage: {
        dialogs: DialogsPropsType[]
        messages: MessagesPropsType[]
    }
}

const data: RootStateType = {
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
    }
}

ReactDOM.render(
    <App data={data}/>,
    document.getElementById('root')
);