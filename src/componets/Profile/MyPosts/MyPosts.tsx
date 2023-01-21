import React, {RefObject, KeyboardEvent} from "react";
import {Post} from "./Post/Post";
import classes from "./MyPosts.module.css";
import {PostDataType} from "../../../redux/state";


type propsType = {
    postData: PostDataType[]
    newPostText: string
    addPost: () => void
    updateNewPostText: (newText: string) => void
}
export const MyPosts: React.FC<propsType> = ({postData, addPost, updateNewPostText, newPostText}) => {

    const postsElements = postData.map(p => <div key={p.id}><Post id={p.id} message={p.message} likesCount={p.likesCount}/></div>)
    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const onClickAddPost = () => {
        if (newPostElement.current) {
            addPost()
        }
    }

    const onKeyUpAddPost = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && e.shiftKey) {
            onClickAddPost()
        }
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            updateNewPostText(newPostElement.current.value)
        }
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              value={newPostText}
                              onChange={onPostChange}
                              onKeyUp={onKeyUpAddPost}/>
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