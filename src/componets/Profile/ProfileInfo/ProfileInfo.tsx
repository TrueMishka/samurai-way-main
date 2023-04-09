import React from 'react';
import classes from "./ProfileInfo.module.scss";
import {ProfileType} from "../../../redux/profile-reducer";
import {PreLoader} from "../../common/PreLoader/PreLoader";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import userBgImg from 'assets/images/user-bg.jpg'
import userStockImg from 'assets/images/user.png'

type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (!props.profile) {
        return <PreLoader/>
    }

    const userPhoto = props.profile
        ? <img src={props.profile.photos?.large
            ? props.profile.photos.large
            : userStockImg}/>
        : <img src={userStockImg}/>

    return (
        <div className={classes.wrapper}>
            <div className={classes.profile}>
                <img className={classes.profileBackground} src={userBgImg}/>
            </div>
            <div className={classes.profileBlock}>
                <div className={classes.profileImage}>
                    {userPhoto}
                </div>
                <div className={classes.profileInfo}>
                    <h2 className={classes.profileName}>{props.profile.fullName}</h2>
                    <ProfileStatus
                        status={props.status}
                        updateStatus={props.updateStatus}/>
                </div>
                {/*<div>{`About: ${props.profile.aboutMe}`}</div>*/}
                {/*<div>{`id: ${props.profile.userId}`}</div>*/}
            </div>
        </div>
    );
};