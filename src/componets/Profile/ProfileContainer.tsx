import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type MapStateProfilePropsType = {
    profile: ProfileType
}
type MapDispatchProfilePropsType = {
    setUserProfile: (profile: ProfileType) => void
    getUserProfile: (userId: string) => void
}
type ProfileContainerComponentPropsType = MapStateProfilePropsType & MapDispatchProfilePropsType

type PathParamType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamType> & ProfileContainerComponentPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
            />
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateProfilePropsType => {
    return {
        profile: state.profilePage.profile
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUserProfile, getUserProfile}),
    withRouter
)(ProfileContainer)

