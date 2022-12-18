import React from "react";
import classes from './Header.module.css';
import logo from './../../img/logo.png'

export const Header = () => {
    return (
        <header className={classes.header}>
            {/*<img src={'https://coloringhome.com/coloring/dc8/xeB/dc8xeBezi.png'}/>*/}
            <img src={logo}/>
        </header>
    );
}