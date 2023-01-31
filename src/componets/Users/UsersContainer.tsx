import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, InitialStateType, setUsersAC, unfollowAC, UserDataType} from "../../redux/users-reducer";

type MapStatePropsType = {
    usersPage: InitialStateType
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserDataType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)