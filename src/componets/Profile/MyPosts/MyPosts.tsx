import React, {KeyboardEvent} from "react";
import {Post} from "./Post/Post";
import classes from "./MyPosts.module.css";
import {PostDataType} from "../../../redux/store";

type propsType = {
    postData: PostDataType[]
    newPostText: string
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
}
export const MyPosts: React.FC<propsType> = ({postData, newPostText, addPost, updateNewPostText}) => {

    const postsElements = postData.map(p => {
        return <div key={p.id}>
            <Post id={p.id}
                  message={p.message}
                  likesCount={p.likesCount}/>
        </div>
    })
    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const onClickAddPost = () => {
        if (newPostElement.current) {
            addPost()
        }
    }

    const onKeyUpAddPost = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && e.ctrlKey) {
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
                              onKeyUp={onKeyUpAddPost}
                              placeholder={'Enter new post'}/>
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