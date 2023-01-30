import {ActionTypes, DialogsPropsType, MessagesPropsType} from "./store";

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

type StateType = {
    dialogs: DialogsPropsType[]
    messages: MessagesPropsType[]
    newMessageBody: string
}

const initialState: StateType = {
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
}

const dialogsReducer = (state: StateType = initialState, action: ActionTypes): StateType => {

    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage: MessagesPropsType = {
                id: new Date().getTime(),
                message: state.newMessageBody
            }
            state.messages.push(newMessage)
            state.newMessageBody = ''
            return state
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
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