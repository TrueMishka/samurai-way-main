import {ActionTypes} from "./redux-store";

const SEND_MESSAGE = 'SEND-MESSAGE';

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
    ] as MessageType[]
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: action.newMessageBody
            }
            return {...state, messages: [...state.messages, newMessage]}
        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody: string) => ({type: SEND_MESSAGE, newMessageBody} as const)

export default dialogsReducer