import React from "react";

import { Profile as ProfileType } from "../../types/types";

export interface IProfile {
    profile: ProfileType
}

const Profile: React.FunctionComponent<IProfile> = (
    props: IProfile
) => {
    return (
        <div className='profile-body'>
            <div className='header'>
                About
            </div>

            <div className='body'>
                {props?.profile?.about?.bio}
            </div>
        </div>
    )
};

export default Profile;
