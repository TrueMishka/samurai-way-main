import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {rootState} from "./redux/state";
import {addPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
    <BrowserRouter>
        <App rootState={rootState} addPost={addPost}/>
    </BrowserRouter>,
    document.getElementById('root')
);