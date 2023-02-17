import React from 'react';
import {InitialStateType, UserDataType} from "../../redux/users-reducer";
import classes from "./Users.module.css";
import userPhoto from '../../assets/images/user.png'
import axios from 'axios'

type UsersPropsType = {
    usersPage: InitialStateType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserDataType[]) => void
}

//Function component
/*
export const Users: React.FC<UsersPropsType> = ({usersPage, follow, unfollow, setUsers}) => {

    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    setUsers(response.data.items)
                })
    },[])

    return (
        <div>
            {usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={classes.userPhoto} src={u.photos.small ? u.photos.small : userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => unfollow(u.id)}>Unfollow</button>
                            : <button onClick={() => follow(u.id)}>Follow</button>}
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
*/


//Class component
export class Users extends React.Component<UsersPropsType> {

    /*constructor(props: UsersPropsType) {
        super(props);
    }*/

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users?count=1')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div>
                <div>
                    <span>1</span>
                    <span className={classes.selectedPage}>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                </div>
                {this.props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={classes.userPhoto} src={u.photos.small ? u.photos.small : userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                            : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
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
    }
}
