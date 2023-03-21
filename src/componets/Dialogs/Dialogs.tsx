import React, {KeyboardEvent, RefObject} from "react";
import classes from "./Dialogs.module.css";
import {DialogItem} from "./Dialogitem/DialogItem";
import {Message} from "./Dialogitem/Message/Message";
import {InitialStateType} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

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

type AddMessageFormType = {
    newMessageBody: string
}

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newMessageBody'} placeholder={'Enter your message'}/>
            </div>
            <button>add</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: 'dialogAddMessageForm'})(AddMessageForm)