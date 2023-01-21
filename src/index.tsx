import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {rootState, subscribe} from "./redux/state";
import {addPost, RootStateType, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

const rerenderEntireTree = (rootState: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App rootState={rootState} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(rootState)

subscribe(rerenderEntireTree)