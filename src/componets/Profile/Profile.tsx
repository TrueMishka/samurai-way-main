import React from "react";
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../redux/state";


type ProfilePageType = {
    profilePage: {
        posts: PostDataType[]
        newPostText: string
    }
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export const Profile:React.FC<ProfilePageType> = ({profilePage, addPost, updateNewPostText}) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPosts postData={profilePage.posts}
                     newPostText={profilePage.newPostText}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}
            />
        </div>
    );
}