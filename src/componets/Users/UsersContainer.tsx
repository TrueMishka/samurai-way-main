import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {
    PageUsersStateType,
    UserDataType,
    setCurrentPage,
    toggleFollowingProgress,
    requestUsers,
    follow,
    unfollow
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {PreLoader} from "../common/PreLoader/PreLoader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "redux/users-selectors";

type UsersContainerComponentPropsType = {
    users: UserDataType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
    setCurrentPage: (currentPage: number) => void
    requestUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

class UsersContainerComponent extends React.Component<UsersContainerComponentPropsType> {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <PreLoader/>
                    : <Users
                        users={this.props.users}
                        pageSize={this.props.pageSize}
                        totalUsersCount={this.props.totalUsersCount}
                        currentPage={this.props.currentPage}
                        pageChanged={this.onPageChanged}
                        followingInProgress={this.props.followingInProgress}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                    />}
            </>
        );
    }
}

// const mapStateToProps = (state: AppStateType): PageUsersStateType => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }
const mapStateToProps = (state: AppStateType): PageUsersStateType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export const UsersContainer = compose<React.ComponentType>(
    // withAuthRedirect,
    connect(mapStateToProps, {
        setCurrentPage,
        toggleFollowingProgress,
        requestUsers,
        follow,
        unfollow
    }))(UsersContainerComponent)