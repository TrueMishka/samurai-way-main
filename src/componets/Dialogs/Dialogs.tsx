import React from "react";
import classes from "./Dialogs.module.css";
import {DialogItem} from "./Dialogitem/DialogItem";
import {Message} from "./Dialogitem/Message/Message";

export type DialogsPropsType = {
    id: number
    name: string
}

export type MessagesPropsType = {
    id: number
    message: string
}

const dialogs: DialogsPropsType[] = [
    {id: 1, name: 'Mishka'},
    {id: 2, name: 'Vizix'},
    {id: 3, name: 'Kibot'},
    {id: 4, name: 'Burn'},
    {id: 5, name: 'Zveklas'}
]
const messages: MessagesPropsType[] = [
    {id: 1, message: 'Hi'},
    {id: 1, message: 'How are you?'},
    {id: 1, message: 'Yo'},
    {id: 1, message: 'Yo-Yo'},
    {id: 1, message: 'UwU'},
]

export const Dialogs = () => {

    let dialogsElements = dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);
    let messagesElements = messages.map(message => <Message id={message.id} message={message.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    );
}