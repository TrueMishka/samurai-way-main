import React from "react";
import classes from "./Dialogs.module.css";

export const Dialogs = () => {
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    Mishka
                </div>
                <div className={classes.dialog}>
                    Vizix
                </div>
                <div className={classes.dialog}>
                    Kibot
                </div>
                <div className={classes.dialog}>
                    Burn
                </div>
                <div className={classes.dialog}>
                    Zveklas
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>yo!</div>
            </div>
        </div>
    );
}