import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogItem} from "./Dialogitem/Dialogitem";
import exp from "constants";
import {Message} from "./Dialogitem/Message/Message";

export type DialogsPropsType = {
    id: number
    name: string
}

export type MessagesPropsType = {
    title: string
}

const dialogs: DialogsPropsType[] = [
    {id: 1, name: 'Mishka'},
    {id: 2, name: 'Vizix'},
    {id: 3, name: 'Kibot'},
    {id: 4, name: 'Burn'},
    {id: 5, name: 'Zveklas'}
]

const messages: MessagesPropsType[] = [
    {title: 'Hi'},
    {title: 'How are you?'},
    {title: 'Yo'},
    {title: 'Yo-Yo'},
    {title: 'UwU'},
]

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogs.map((d,index) => {
                    return <DialogItem id={d.id} name={d.name}/>
                })}
            </div>
            <div className={classes.messages}>
                {messages.map((m, index) => {
                    return <Message title={m.title}/>
                })}
            </div>
        </div>
    );
}