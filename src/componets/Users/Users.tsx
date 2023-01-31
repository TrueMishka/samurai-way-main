import React from 'react';
import {InitialStateType, UserDataType} from "../../redux/users-reducer";
import classes from "./Users.module.css";

type UsersPropsType = {
    usersPage: InitialStateType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserDataType[]) => void
}

export const Users:React.FC<UsersPropsType> = ({usersPage, follow, unfollow, setUsers}) => {

    if (usersPage.users.length === 0) {
        setUsers([
            {
                id: 1,
                followed: false,
                fullName: 'Bob',
                photoUrl: 'https://example.com/source-image.gif',
                status: 'Hello',
                location: {country: 'Belarus', city: 'Minsk'}
            },
            {
                id: 2,
                followed: false,
                fullName: 'Michel',
                photoUrl: 'https://example.com/source-image.gif',
                status: 'Yo',
                location: {country: 'Belarus', city: 'Minsk'}
            },
            {
                id: 3,
                followed: true,
                fullName: 'Denny',
                photoUrl: 'https://example.com/source-image.gif',
                status: 'Its my status',
                location: {country: 'Kiev', city: 'Ukraine'}
            },
            {
                id: 4,
                followed: true,
                fullName: 'Helen',
                photoUrl: 'https://example.com/source-image.gif',
                status: 'Dont know what to write here',
                location: {country: 'Russia', city: 'Moscow'}
            }
        ])
    }

    return (
        <div>
            {usersPage.users.map(u => <div>
                <span>
                    <div>
                        <img className={classes.userPhoto} src={u.photoUrl}/>
                    </div>
                    <div>
                        {u.followed
                        ? <button onClick={() => unfollow(u.id)}>Unfollow</button>
                        : <button onClick={() => follow(u.id)}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                    <span></span>
                </span>
            </div>)}
        </div>
    );
};