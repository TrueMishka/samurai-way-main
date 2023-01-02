import React, {RefObject} from "react";
import {Post} from "./Post/Post";
import classes from "./MyPosts.module.css";
import {PostDataType} from "../../../redux/state";


type propsType = {
    postData: PostDataType[]
}
export const MyPosts:React.FC<propsType> = ({postData}) => {

    const postsElements = postData.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)
    const newPostElement:RefObject<HTMLTextAreaElement> = React.createRef()

    const addPost = () => {
        alert(newPostElement.current?.value)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}