import React, {RefObject, KeyboardEvent} from "react";
import {Post} from "./Post/Post";
import classes from "./MyPosts.module.css";
import {ActionTypes, PostDataType} from "../../../redux/state";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";

type propsType = {
    postData: PostDataType[]
    newPostText: string
    dispatch: (action: ActionTypes) => void
}
export const MyPosts: React.FC<propsType> = ({postData, newPostText, dispatch}) => {

    const postsElements = postData.map(p => <div key={p.id}><Post id={p.id} message={p.message}
                                                                  likesCount={p.likesCount}/></div>)
    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const onClickAddPost = () => {
        if (newPostElement.current) {
            dispatch(addPostCreator())
        }
    }

    const onKeyUpAddPost = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            onClickAddPost()
        }
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            dispatch(updateNewPostTextCreator(newPostElement.current.value))
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