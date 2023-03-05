import React from 'react';
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserDataType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {API} from "../../api/api";

const settings = {
    withCredentials: true,
    header: {
        'API-KEY': '8014b026-2d5d-4013-8837-120f27334da7'
    }
}

type UsersPropsType = {
    users: UserDataType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    pageChanged: (currentPage: number) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const onClickFollow = (userId: number) => {
        API.followAPI.follow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    props.follow(userId)
                }
            })
    }

    const onClickUnfollow = (userId: number) => {
        API.followAPI.unfollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    props.unfollow(userId)
                }
            })
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
                            ? <button onClick={() => onClickUnfollow(u.id)}>Unfollow</button>
                            : <button onClick={() => onClickFollow(u.id)}>Follow</button>}
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