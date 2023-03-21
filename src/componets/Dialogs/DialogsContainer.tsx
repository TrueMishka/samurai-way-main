import React from "react";
import {
    InitialStateType,
    sendMessageCreator
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type MapStatePropsType = {
    dialogsPage: InitialStateType
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)