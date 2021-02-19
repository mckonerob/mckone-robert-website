import React from "react";

import { Profile as ProfileType } from "../../types/types";

import ProfileHeader from "../ProfileHeader";
import ProfileBody from "../ProfileBody";

import "./Profile.scss";

export interface IProfile {
    data: ProfileType
}

const Profile: React.FunctionComponent<IProfile> = (
    props: IProfile
) => {
    return (
        <div className='profile'>
            <ProfileHeader profile={props?.data} />
            <ProfileBody profile={props?.data} />
        </div>
    )
};

export default Profile;
