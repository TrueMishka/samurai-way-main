import React, {RefObject} from "react";
import {Post} from "./Post/Post";
import classes from "./MyPosts.module.css";
import {PostDataType} from "../../../redux/state";


type propsType = {
    postData: PostDataType[]
    addPost: (postMessage: string) => void
}
export const MyPosts:React.FC<propsType> = ({postData, addPost}) => {

    const postsElements = postData.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)
    const newPostElement:RefObject<HTMLTextAreaElement> = React.createRef()

    const onClickAddPost = () => {
        if (newPostElement.current) {
            addPost(newPostElement.current?.value)
        }
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={onClickAddPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}