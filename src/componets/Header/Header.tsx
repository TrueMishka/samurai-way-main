import React from "react";
import classes from './Header.module.css';
import logo from './../../img/logo.png'
import {NavLink} from "react-router-dom";

type PropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

export const Header:React.FC<PropsType> = ({isAuth, login, logout}) => {
    return (
        <header className={classes.header}>
            {/*<img src={'https://coloringhome.com/coloring/dc8/xeB/dc8xeBezi.png'}/>*/}
            <img src={logo}/>
            <div className={classes.loginBlock}>
                {isAuth
                    ? <div>{login} - <button onClick={logout}>logout</button></div>
                    :
                    <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
}