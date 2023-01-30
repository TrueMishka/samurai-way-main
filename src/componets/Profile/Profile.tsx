import React from "react";
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes, PostDataType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export const Profile= () => {
    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
}