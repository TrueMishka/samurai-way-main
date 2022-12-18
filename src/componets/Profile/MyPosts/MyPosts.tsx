import React from "react";
import {Post} from "./Post/Post";
import classes from "./MyPosts.module.css";

export const MyPosts = () => {
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message={'Hello World'} likesCount={15}/>
                <Post message={'Goodbye World'} likesCount={20}/>
            </div>
        </div>
    );
}