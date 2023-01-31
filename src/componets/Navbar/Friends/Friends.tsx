import React from 'react';
import classes from "./Friends.module.css";
import {FriendType} from "../../../redux/sidebar-reducer";

type PropsType = {
    friends: FriendType[]
}

export const Friends: React.FC<PropsType> = ({friends}) => {
    const showFriends = friends.map((f, index) => {
        return (
            <div key={index}>
                <img className={classes.avatar} src={'https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_960_720.jpg'}/>
                <div>{f.name}</div>
            </div>
        );
    })
    return (
        <div className={classes.main}>
            <span>Friends!</span>
            <div className={classes.items}>
                {showFriends}
            </div>
        </div>
    );
};