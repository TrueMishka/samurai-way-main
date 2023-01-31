import React from 'react';
import classes from "../../Dialogs.module.css";
import {MessageType} from "../../../../redux/dialogs-reducer";


export const Message = (props: MessageType) => {
    return (
        <div className={classes.message}>
            <span key={props.id}>{props.message}</span>
        </div>
    );
};