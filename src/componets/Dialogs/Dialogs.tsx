import React, {RefObject} from "react";
import classes from "./Dialogs.module.css";
import {DialogItem} from "./Dialogitem/DialogItem";
import {Message} from "./Dialogitem/Message/Message";
import {DialogsPropsType, MessagesPropsType} from "../../redux/state";
import ReactDOM from "react-dom";


type PropsType = {
    dialogPage:
        {
            dialogs: DialogsPropsType[]
            messages: MessagesPropsType[]
        }
}

export const Dialogs: React.FC<PropsType> = ({dialogPage}) => {

    let dialogsElements = dialogPage.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);
    let messagesElements = dialogPage.messages.map(message => <Message id={message.id} message={message.message}/>);

    const newMessageElement:RefObject<HTMLTextAreaElement> = React.createRef()
    const addMessage = () => {
        alert(newMessageElement.current?.value)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <textarea ref={newMessageElement}></textarea>
                    <button onClick={addMessage}>add</button>
                </div>
            </div>
        </div>
    );
}