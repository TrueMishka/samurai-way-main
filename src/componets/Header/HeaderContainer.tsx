import React from "react";
import {Header} from "./Header";
import {getAuthUserData, logout} from "redux/auth-reducer";
import {AppStateType} from "redux/redux-store";
import {connect} from "react-redux";


type MapStateAuthType = ReturnType<typeof mapStateToProps>
type MapDispatchAuthType = {
    // getAuthUserData: () => void
    logout: () => void
}
type HeaderContainerComponentPropsType = MapStateAuthType & MapDispatchAuthType

class HeaderContainer extends React.Component<HeaderContainerComponentPropsType> {

    // componentDidMount() {
    //     this.props.getAuthUserData()
    // }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.data.login
    }
}

// export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer)
export default connect(mapStateToProps, {logout})(HeaderContainer)
