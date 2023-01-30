import React, {KeyboardEvent, RefObject} from "react";
import classes from "./Dialogs.module.css";
import {DialogItem} from "./Dialogitem/DialogItem";
import {Message} from "./Dialogitem/Message/Message";
import {
    DialogsPropsType,
    MessagesPropsType
} from "../../redux/store";


type PropsType = {
    dialogPage:
        {
            dialogs: DialogsPropsType[]
            messages: MessagesPropsType[]
            newMessageBody: string
        }
    updateNewMessageBody: (newTextMessage: string) => void
    sendMessage: () => void
}

export const Dialogs: React.FC<PropsType> = ({dialogPage, updateNewMessageBody, sendMessage}) => {

    let dialogsElements = dialogPage.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);
    let messagesElements = dialogPage.messages.map(message => <Message id={message.id} message={message.message}/>);

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
                              value={dialogPage.newMessageBody}
                              onChange={onMessageChange}
                              onKeyUp={onKeyUpAddMessage} placeholder={'Enter your message'} ></textarea>
                    <button onClick={addMessageHandler}>add</button>
                </div>
            </div>
        </div>
    );
}