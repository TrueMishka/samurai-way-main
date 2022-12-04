import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={classes.profile}>
            <div>
                <img className={classes.profileBackground} src={'https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg'}/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;