import React from "react";
import classes from "./Dialogs.module.css";
import {DialogItem} from "./Dialogitem/DialogItem";
import {Message} from "./Message/Message";
import {InitialStateType} from "redux/dialogs-reducer";
import {AddMessageFormRedux, AddMessageFormType} from "componets/Dialogs/AddMessageForm/AddMessageForm";

type PropsType = {
    isAuth: boolean
    dialogsPage: InitialStateType
    sendMessage: (newMessageBody: string) => void
}

export const Dialogs: React.FC<PropsType> = ({isAuth, dialogsPage, sendMessage}) => {

    let dialogsElements = dialogsPage.dialogs.map(dialog => <DialogItem key={dialog.id} id={dialog.id}
                                                                        name={dialog.name}/>);
    let messagesElements = dialogsPage.messages.map(message => <Message key={message.id} id={message.id}
                                                                        message={message.message}/>);

    const addNewMessage = (value: AddMessageFormType) => {
        sendMessage(value.newMessageBody)
    }


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    );
}
