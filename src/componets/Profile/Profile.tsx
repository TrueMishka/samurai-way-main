import React from "react";
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../index";

type ProfilePageType = {
    profilePage: {
        posts: PostDataType[]
    }
}

export const Profile:React.FC<ProfilePageType> = ({profilePage}) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPosts postData={profilePage.posts}/>
        </div>
    );
}