import React from "react";
import {Post} from "./Post/Post";
import classes from "./MyPosts.module.css";
import {ProfilePageStateType} from "redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required, maxLengthCreator} from "utils/validators/validators";
import {Textarea} from "componets/common/FormsContorls/FormsControls";

const maxLength30 = maxLengthCreator(30)

type PropsType = {
    profilePage: ProfilePageStateType
    addPost: (newPostText: string) => void
}
export const MyPosts: React.FC<PropsType> = ({profilePage, addPost}) => {

    const postsElements = profilePage.posts.map(p => {
        return <div key={p.id}>
            <Post id={p.id}
                  message={p.message}
                  likesCount={p.likesCount}/>
        </div>
    })

    const addNewPost = (value: AddPostFormType) => {
        addPost(value.newPostText)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostFormRedux onSubmit={addNewPost}/>

            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}

type AddPostFormType = {
    newPostText: string
}

const AddPostForm: React.FC<InjectedFormProps<AddPostFormType>> = (props) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={Textarea} name={'newPostText'} placeholder={'Enter new post'}
                    validate={[required, maxLength30]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm<AddPostFormType>({form: 'profileAddPostForm'})(AddPostForm)