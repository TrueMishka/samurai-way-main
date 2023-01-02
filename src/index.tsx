import React from 'react';
import {rootState} from "./redux/state";
import {rerenderEntireTree} from "./render";

rerenderEntireTree(rootState);