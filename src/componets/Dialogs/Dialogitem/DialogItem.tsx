import React from 'react';
import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogsPropsType} from "../../../index";

export const DialogItem = (props: DialogsPropsType) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    );
};