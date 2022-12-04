import React from "react";
import classes from'./Profile.module.css';
const Profile = () => {
    return (
        <div className={classes.profile}>
            <div>
                <img className={classes.profileBackground} src={'https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg'}/>
            </div>
            <div>
                ava + description
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtfZRhbGQtq2BapB2MXJfWIO2QriO5Wx3qQ&usqp=CAU'}/>
            </div>
            <div>
                My posts
                <div>
                    New posts
                </div>
                <div>
                    Posts
                    <div className={classes.item}>
                        post 1
                    </div>
                    <div className={classes.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;