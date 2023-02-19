import React from 'react';
import classes from "./ProfileInfo.module.css";
import {ProfileType} from "../../../redux/profile-reducer";
import {PreLoader} from "../../common/PreLoader/PreLoader";

type ProfileInfoPropsType = {
    profile: ProfileType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {

/*    if (!props.profile) {
        return <PreLoader/>
    }*/

    return (
        <div>
            <div className={classes.profile}>
                <img className={classes.profileBackground}
                     src={'https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg'}/>
            </div>
            <div className={classes.descriptionBlock}>
                {props.profile.photos
                    ? <img src={props.profile.photos.large}/>
                    : <PreLoader/>}
                ava + description
            </div>
        </div>
    );
};