import React from "react";
import {Post} from "./Post/Post";
import classes from "./MyPosts.module.css";

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}

const postData: PostDataType[] = [
    {id: 1, message: 'Hello World', likesCount: 15},
    {id: 2, message: 'Goodbye World', likesCount: 23},
]

export const MyPosts = () => {

    const postsElements = postData.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

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
                {postsElements}
            </div>
        </div>
    );
}