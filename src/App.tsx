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
import {addPost, RootStateType, updateNewPostText} from "./redux/state";


type PropsType = {
    rootState: RootStateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const App: React.FC<PropsType> = ({rootState, addPost, updateNewPostText}) => {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar sidebar={rootState.sidebar}/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'} render={() => <Profile profilePage={rootState.profilePage}
                                                                    addPost={addPost}
                                                                    updateNewPostText={updateNewPostText}/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogPage={rootState.dialogsPage}/>}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;