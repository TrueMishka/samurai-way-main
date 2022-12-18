import React from 'react';
import classes from "../../Dialogs.module.css";
import {MessagesPropsType} from "../../Dialogs";

export const Message = (props: MessagesPropsType) => {
    return (
        <div className={classes.message}>
            {props.title}
        </div>
    );
};