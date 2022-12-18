import React from 'react';
import classes from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.profile}>
                <img className={classes.profileBackground} src={'https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg'}/>
            </div>
            <div className={classes.discriptionBlock}>
                ava + description
            </div>
        </div>
    );
};