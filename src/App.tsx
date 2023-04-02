import React from 'react';
import './App.css';
import {Navbar} from "componets/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "componets/News/News";
import {Music} from "componets/Music/Music";
import {Settings} from "componets/Settings/Settings";
import {DialogsContainer} from "componets/Dialogs/DialogsContainer";
import {UsersContainer} from "componets/Users/UsersContainer";
import ProfileContainer from "./componets/Profile/ProfileContainer";
import HeaderContainer from "./componets/Header/HeaderContainer";
import Login from "./componets/Login/Login";

const App = () => {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/login'} render={() => <Login/>}/>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;