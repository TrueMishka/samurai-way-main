import React from "react";
import Post from "./Post/Post";
import classes from "MyPosts.module.css";

const MyPosts = () => {
    return (
        <div>
            <div>
                New posts
            </div>
            <Post message={'Hello World'} likes={15}/>
            <Post message={'Goodbye World'} likes={20}/>
        </div>
    );
}

export default MyPosts;