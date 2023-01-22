import React from "react";
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes, PostDataType} from "../../redux/state";


type ProfilePageType = {
    profilePage: {
        posts: PostDataType[]
        newPostText: string
    }
    dispatch: (action: ActionTypes) => void
}

export const Profile:React.FC<ProfilePageType> = ({profilePage,dispatch}) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPosts postData={profilePage.posts}
                     newPostText={profilePage.newPostText}
                     dispatch={dispatch}
            />
        </div>
    );
}