import React from "react";
import classes from "./Post.module.css";

const Post = (props: any) => {
    return (
        <div className={classes.item}>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtfZRhbGQtq2BapB2MXJfWIO2QriO5Wx3qQ&usqp=CAU'}/>
            {props.message}
            <div>
                <span>like {props.likes}</span>
            </div>
        </div>
    );
}

export default Post;