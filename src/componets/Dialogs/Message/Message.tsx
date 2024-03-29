import React from 'react';
import classes from "componets/Dialogs/Dialogs.module.scss";
import {MessageType} from "redux/dialogs-reducer";


export const Message = (props: MessageType) => {
    return (
        <div className={classes.message}>
            <span key={props.id}>{props.message}</span>
        </div>
    );
};