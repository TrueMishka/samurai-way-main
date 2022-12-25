import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {rootState} from "./redux/state";


ReactDOM.render(
    <App rootState={rootState}/>,
    document.getElementById('root')
);