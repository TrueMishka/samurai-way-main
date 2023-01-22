import React, {KeyboardEvent, RefObject} from "react";
import classes from "./Dialogs.module.css";
import {DialogItem} from "./Dialogitem/DialogItem";
import {Message} from "./Dialogitem/Message/Message";
import {
    ActionTypes,
    DialogsPropsType,
    MessagesPropsType
} from "../../redux/state";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


type PropsType = {
    dialogPage:
        {
            dialogs: DialogsPropsType[]
            messages: MessagesPropsType[]
            newMessageBody: string
        }
    dispatch: (action: ActionTypes) => void
}

export const Dialogs: React.FC<PropsType> = ({dialogPage, dispatch}) => {

    let dialogsElements = dialogPage.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);
    let messagesElements = dialogPage.messages.map(message => <Message id={message.id} message={message.message}/>);

    const newMessageElement: RefObject<HTMLTextAreaElement> = React.createRef()

    const onMessageChange = () => {
        if (newMessageElement.current) {
            dispatch(updateNewMessageBodyCreator(newMessageElement.current.value))
        }
    }

    const onKeyUpAddMessage = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            addMessage()
        }
    }

    const addMessage = () => {
        dispatch(sendMessageCreator())
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
                    <button onClick={addMessage}>add</button>
                </div>
            </div>
        </div>
    );
}