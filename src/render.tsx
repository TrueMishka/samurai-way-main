import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, RootStateType} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export const rerenderEntireTree = (rootState: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App rootState={rootState} addPost={addPost}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

