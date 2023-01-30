import React from 'react';
import classes from "../../Dialogs.module.css";
import {MessagesPropsType} from "../../../../redux/store";


export const Message = (props: MessagesPropsType) => {
    return (
        <div className={classes.message}>
            <span key={props.id}>{props.message}</span>
        </div>
    );
};