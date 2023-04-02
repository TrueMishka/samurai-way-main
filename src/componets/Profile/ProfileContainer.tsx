import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "redux/redux-store";
import {
    getStatusTC,
    getUserProfileAC,
    ProfileType,
    setUserProfileAC,
    updateStatusTC
} from "redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "hoc/withAuthRedirect";
import {compose} from "redux";

type MapStateProfilePropsType = {
    profile: ProfileType
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}
type MapDispatchProfilePropsType = {
    setUserProfile: (profile: ProfileType) => void
    getUserProfileAC: (userId: number) => void
    getStatusTC: (userId: number) => void
    updateStatusTC: (status: string) => void
}
type ProfileContainerComponentPropsType = MapStateProfilePropsType & MapDispatchProfilePropsType

type PathParamType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamType> & ProfileContainerComponentPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = +this.props.match.params.userId

        if (!userId) {
            if (this.props.authorizedUserId) {
                userId = this.props.authorizedUserId
            } else {
                this.props.history.push('/login')
            }
        }

        if (userId) {
            this.props.getUserProfileAC(userId)
            this.props.getStatusTC(userId)
        }
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatusTC}
            />
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateProfilePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.data.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUserProfileAC, getUserProfileAC, getStatusTC, updateStatusTC}),
    withRouter
    // withAuthRedirect
)(ProfileContainer)

