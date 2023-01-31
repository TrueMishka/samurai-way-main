import {ActionTypes} from "./store";

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

const initialState = {
    dialogs: [
        {id: 1, name: 'Mishka'},
        {id: 2, name: 'Vizix'},
        {id: 3, name: 'Kibot'},
        {id: 4, name: 'Burn'},
        {id: 5, name: 'Zveklas'}
    ] as DialogType[],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo-Yo'},
        {id: 5, message: 'UwU'}
    ] as MessageType[],
    newMessageBody: ''
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: state.newMessageBody
            }
            return {...state, messages: [...state.messages, newMessage], newMessageBody: ''}
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state, newMessageBody: action.body}
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE} as const)
export const updateNewMessageBodyCreator = (messageText: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: messageText
} as const)

export default dialogsReducer