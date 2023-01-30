import React, {KeyboardEvent, RefObject} from "react";
import classes from "./Dialogs.module.css";
import {DialogItem} from "./Dialogitem/DialogItem";
import {Message} from "./Dialogitem/Message/Message";
import {
    ActionTypes,
    DialogsPropsType,
    MessagesPropsType
} from "../../redux/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";


type PropsType = {
    store: any
}

export const DialogsContainer: React.FC<PropsType> = ({store}) => {

    const state = store.getState().dialogsPage

    const onMessageChange = (newTextMessage: string) => {
            store.dispatch(updateNewMessageBodyCreator(newTextMessage))
    }

    const onAddMessage = () => {
        store.dispatch(sendMessageCreator())
    }

    return (
        <Dialogs dialogPage={state} updateNewMessageBody={onMessageChange} sendMessage={onAddMessage}/>
    );
}