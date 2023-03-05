import React from "react";
import classes from './Header.module.css';
import logo from './../../img/logo.png'
import {NavLink} from "react-router-dom";

type PropsType = {
    isAuth: boolean
    login: string | null
}

export const Header:React.FC<PropsType> = ({isAuth, login}) => {
    return (
        <header className={classes.header}>
            {/*<img src={'https://coloringhome.com/coloring/dc8/xeB/dc8xeBezi.png'}/>*/}
            <img src={logo}/>
            <div className={classes.loginBlock}>
                {isAuth
                    ? login
                    :
                    <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
}