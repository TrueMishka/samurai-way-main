import React from "react";
import Post from "./Post/Post";
import classes from "MyPosts.module.css";

const MyPosts = () => {
    return (
        <div>
            <div>
                New posts
            </div>
            <Post message={'Hello World'} likesCount={15}/>
            <Post message={'Goodbye World'} likesCount={20}/>
        </div>
    );
}

export default MyPosts;