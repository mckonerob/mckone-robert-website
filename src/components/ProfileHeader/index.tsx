import React from "react";

import { Profile as ProfileType } from "../../types/types";

import "./ProfileHeader.scss";

export interface IProfile {
    profile: ProfileType
}

const Profile: React.FunctionComponent<IProfile> = (
    props: IProfile
) => {
    return (
        <div className='profile-header'>
            <div className='details'>
                <a className='name'>
                    {props?.profile?.details?.name}
                </a>

                <a className='slash'>
                    /
                </a>

                <a className='title'>
                    {props?.profile?.details?.title}
                </a>

                <br/><a>
                    {props?.profile?.details?.address}
                </a>

                <br/><a className='link' href={`tel:${props?.profile?.details?.phone}`}>
                    {props?.profile?.details?.phone}
                </a>

                <br/><a className='link' href={`email:${props?.profile?.details?.email}`}>
                    {props?.profile?.details?.email}
                </a>

                <br/><a className='link' href={`https://www.linkedin.com/in${props?.profile?.details?.socials?.linkedin}`}>
                    {props?.profile?.details?.socials?.linkedin}
                </a>

                <br/><a className='link' href={`https://github.com${props?.profile?.details?.socials?.github}`}>
                    {props?.profile?.details?.socials?.github}
                </a>

                <br/><a className='link' href={`https://www.messenger.com/t${props?.profile?.details?.socials?.messenger}`}>
                    {props?.profile?.details?.socials?.messenger}
                </a>
            </div>
            <div className='image-container'>
                <img
                    src={props?.profile?.details?.profilePic}
                    className="image-container"
                    alt={props?.profile?.details?.name}
                />
            </div>
        </div>
    )
};

export default Profile;
