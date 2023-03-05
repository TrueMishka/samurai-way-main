import React from "react";
import {Header} from "./Header";
import {setUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {API} from "../../api/api";


type MapStateAuthType = ReturnType<typeof mapStateToProps>
type MapDispatchAuthType = { setUserData: (userId: number, email: string, login: string) => void }
type HeaderContainerComponentPropsType = MapStateAuthType & MapDispatchAuthType

class HeaderContainer extends React.Component<HeaderContainerComponentPropsType> {

    componentDidMount() {
        API.authAPI.auth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
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
