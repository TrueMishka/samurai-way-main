import React from 'react';
import './App.css';
import {Header} from "./componets/Header/Header";
import {Navbar} from "./componets/Navbar/Navbar";
import {Profile} from "./componets/Profile/Profile";
import {Dialogs} from "./componets/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./componets/News/News";
import {Music} from "./componets/Music/Music";
import {Settings} from "./componets/Settings/Settings";
import {DialogsContainer} from "./componets/Dialogs/DialogsContainer";

type PropsType = {
    store: any
/*    store: {
        getState: () => RootStateType
        subscribe: (observer: () => void) => void
        dispatch: (action: ActionTypes) => void
    }*/
    /*store: ReturnType<typeof store>*/
}

const App: React.FC<PropsType> = ({store}) => {
    const state = store.getState()

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar friends={state.sidebar.friends}/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'} render={() => <Profile store={store}/>}/>
                    <Route path={'/dialogs'} render={() => <DialogsContainer store={store}/>}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;