import React from "react";

import { Profile as ProfileType } from "../../types/types";

import About from "./about";
import Work from "./WorkHistory/index";
import Education from "./Education/index";
import Skills from "./Skills/index";

import "./ProfileBody.scss";

export interface IProfile {
    profile: ProfileType
}

const Profile: React.FunctionComponent<IProfile> = (
    props: IProfile
) => {
    return (
        <div className='profile-body'>
            <About profile={props?.profile} />
            <Work profile={props?.profile} />
            <Education profile={props?.profile} />
            <Skills profile={props?.profile} />
        </div>
    )
};

export default Profile;
