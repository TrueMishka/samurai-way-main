import {ActionTypes, DialogsPropsType, MessagesPropsType} from "./state";

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

type StateType = {
    dialogs: DialogsPropsType[]
    messages: MessagesPropsType[]
    newMessageBody: string
}

const dialogsReducer = (state: StateType, action: ActionTypes): any => {

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