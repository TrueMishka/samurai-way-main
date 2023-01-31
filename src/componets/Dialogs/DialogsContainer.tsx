import React from "react";
import {
    InitialStateType,
    sendMessageCreator,
    updateNewMessageBodyCreator
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

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
        updateNewMessageBody: (newTextMessage: string) => {
            dispatch(updateNewMessageBodyCreator(newTextMessage))
        },
        sendMessage:  () => {
            dispatch(sendMessageCreator())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)