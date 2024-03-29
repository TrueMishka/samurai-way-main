import React from "react";
import classes from './Navbar.module.scss';
import {NavLink} from "react-router-dom";
import {FriendType} from "../../redux/sidebar-reducer";

type PropsType = {
    friends: FriendType[]
}

export const Navbar = () => {
    return (
        <div className={classes.navWrapper}>
            <nav className={classes.nav}>
                <div className={classes.item}>
                    <NavLink to={'/profile'} activeClassName={classes.active}>Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to={'/dialogs'} activeClassName={classes.active}>Messages</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to={'/users'} activeClassName={classes.active}>Users</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to={'/news'} activeClassName={classes.active}>News</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to={'/music'} activeClassName={classes.active}>Music</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to={'/settings'} activeClassName={classes.active}>Settings</NavLink>
                </div>
            </nav>
            {/*<div className={classes.item}>
                <Friends friends={friends}/>
            </div>*/}
        </div>
    );
}