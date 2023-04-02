import React from 'react';
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserDataType} from "redux/users-reducer";
import {NavLink} from "react-router-dom";


type UsersPropsType = {
    users: UserDataType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    pageChanged: (currentPage: number) => void
    followingInProgress: number[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const onClickFollow = (userId: number) => {
        props.follow(userId)
    }

    const onClickUnfollow = (userId: number) => {
        props.unfollow(userId)
    }

    return (
        <div>
            <div className={classes.pages}>
                {pages.map(p => {
                    return <span
                        key={p}
                        className={props.currentPage === p ? classes.selectedPage : ''}
                        onClick={() => props.pageChanged(p)}
                    >
                            {p}
                        </span>
                })}
            </div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={`/profile/${u.id}`}>
                            <img className={classes.userPhoto} src={u.photos.small ? u.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => onClickUnfollow(u.id)}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => onClickFollow(u.id)}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                    <span></span>
                </span>
            </div>)}
        </div>
    );
};