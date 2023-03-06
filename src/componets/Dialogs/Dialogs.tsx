import React, {KeyboardEvent, RefObject} from "react";
import classes from "./Dialogs.module.css";
import {DialogItem} from "./Dialogitem/DialogItem";
import {Message} from "./Dialogitem/Message/Message";
import {InitialStateType} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";

type PropsType = {
    isAuth: boolean
    dialogsPage: InitialStateType
    updateNewMessageBody: (newTextMessage: string) => void
    sendMessage: () => void
}

export const Dialogs: React.FC<PropsType> = ({isAuth, dialogsPage, updateNewMessageBody, sendMessage}) => {

    let dialogsElements = dialogsPage.dialogs.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>);
    let messagesElements = dialogsPage.messages.map(message => <Message key={message.id} id={message.id} message={message.message}/>);

    const newMessageElement: RefObject<HTMLTextAreaElement> = React.createRef()

    const onMessageChange = () => {
        if (newMessageElement.current) {
            updateNewMessageBody(newMessageElement.current.value)
        }
    }

    const onKeyUpAddMessage = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            addMessageHandler()
        }
    }

    const addMessageHandler = () => {
        sendMessage()
    }

    if (!isAuth) return <Redirect to={'/login'}/>

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
                    <textarea ref={newMessageElement}
                              value={dialogsPage.newMessageBody}
                              onChange={onMessageChange}
                              onKeyUp={onKeyUpAddMessage} placeholder={'Enter your message'}></textarea>
                    <button onClick={addMessageHandler}>add</button>
                </div>
            </div>
        </div>
    );
}