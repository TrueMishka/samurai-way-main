import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type MapStateProfilePropsType = {
    isAuth: boolean
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
        if (!this.props.isAuth) return <Redirect to={'/login'}/>

        return (
            <Profile {...this.props}
                     profile={this.props.profile}
            />
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateProfilePropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

const withURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile, getUserProfile})(withURLDataContainerComponent)

