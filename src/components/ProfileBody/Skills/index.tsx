import React from "react";

import { Profile as ProfileType } from "../../../types/types";
import SkillsList from "./skills-loop";

export interface IProfile {
    profile: ProfileType
}

const Profile: React.FunctionComponent<IProfile> = (
    { profile }
) => {
    return (
        <div className='profile-body'>
            <div className='header'>
                Skills
            </div>
            {(profile?.skills ?? []).map((skillsItem, index) => {
                return (
                    <SkillsList key={index} title={skillsItem?.title}>
                        {skillsItem.points}
                    </SkillsList>
                )
            })}
        </div>
    )
};

export default Profile;
