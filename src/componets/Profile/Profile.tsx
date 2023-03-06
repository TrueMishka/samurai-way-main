import React from "react";
import classes from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profile: ProfileType
}

export const Profile:React.FC<ProfilePropsType>= ({profile, children}) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo profile={profile}/>
            <MyPostsContainer/>
        </div>
    );
}