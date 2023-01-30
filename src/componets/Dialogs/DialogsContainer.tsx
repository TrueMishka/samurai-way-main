import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

export const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store: any) => {
                    const state = store.getState().dialogsPage

                    const onMessageChange = (newTextMessage: string) => {
                        store.dispatch(updateNewMessageBodyCreator(newTextMessage))
                    }

                    const onAddMessage = () => {
                        store.dispatch(sendMessageCreator())
                    }
                    return <Dialogs dialogPage={state} updateNewMessageBody={onMessageChange}
                                    sendMessage={onAddMessage}/>
                }
            }
        </StoreContext.Consumer>
    );
}