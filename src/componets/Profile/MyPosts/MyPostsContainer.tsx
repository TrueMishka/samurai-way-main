import React from "react";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

type propsType = {
    store: any
}
export const MyPostsContainer: React.FC<propsType> = ({store}) => {
    const state = store.getState().profilePage

    const addPost = () => {
            store.dispatch(addPostCreator())
    }

    const onPostChange = (text: string) => {
            store.dispatch(updateNewPostTextCreator(text))
    }

    return (
        <MyPosts postData={state.posts}
                 newPostText={state.newPostText}
                 addPost={addPost}
                 updateNewPostText={onPostChange}/>
    );
}