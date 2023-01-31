import React from "react";
import {addPostCreator, InitialStateType, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

type MapStatePropsType = {
    profilePage: InitialStateType
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => {
            dispatch(addPostCreator())
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextCreator(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)