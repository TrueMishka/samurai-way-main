import React from "react";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

type propsType = {
    store: any
}
export const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store: any) => {
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
                    )

                }

            }
        </StoreContext.Consumer>

    );
}