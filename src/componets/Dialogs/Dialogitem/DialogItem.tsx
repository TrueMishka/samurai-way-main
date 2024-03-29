import React from 'react';
import classes from "../Dialogs.module.scss";
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../redux/dialogs-reducer";

export const DialogItem = (props: DialogType) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    );
};