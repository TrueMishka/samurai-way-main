import React from "react";
import {Header} from "./Header";
import {AuthStateType, setUserData} from "../../redux/auth-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import axios from "axios";

const settings = {
    withCredentials: true
}

type MapStateAuthType = ReturnType<typeof mapStateToProps>
type MapDispatchAuthType = { setUserData: (userId: number, email: string, login: string) => void }
type HeaderContainerComponentPropsType = MapStateAuthType & MapDispatchAuthType

class HeaderContainer extends React.Component<HeaderContainerComponentPropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', settings)
            .then(res => {
                if (res.data.resultCode === 0) {
                    let {id, email, login} = res.data.data
                    this.props.setUserData(id, email, login)
                }
            })
    }

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

//const withURLDataContainerComponent = withRouter(HeaderContainer)
export default connect(mapStateToProps, {setUserData})(HeaderContainer)
