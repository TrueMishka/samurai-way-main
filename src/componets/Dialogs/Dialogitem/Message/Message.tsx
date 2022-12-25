import React from 'react';
import classes from "../../Dialogs.module.css";
import {MessagesPropsType} from "../../../../redux/state";


export const Message = (props: MessagesPropsType) => {
    return (
        <div className={classes.message}>
            <span>{`id - ${props.id}//${props.message}`}</span>
        </div>
    );
};