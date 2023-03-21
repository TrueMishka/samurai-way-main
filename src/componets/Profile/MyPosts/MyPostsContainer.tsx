import React from "react";
import {
    addPostCreator,
    ProfilePageStateType
} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

type MapStatePropsType = {
    profilePage: ProfilePageStateType
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostCreator(newPostText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)