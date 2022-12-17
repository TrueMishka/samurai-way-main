import React from "react";
import classes from "./Post.module.css";

type propsPostType = {
   message: string;
   likesCount: number;
}

export const Post = (props: propsPostType) => {
    return (
        <div className={classes.item}>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtfZRhbGQtq2BapB2MXJfWIO2QriO5Wx3qQ&usqp=CAU'}/>
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    );
}