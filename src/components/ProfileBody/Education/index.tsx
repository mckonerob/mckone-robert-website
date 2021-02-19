import React from "react";

import { Profile as ProfileType } from "../../../types/types";
import EducationList from "./education-loop";


export interface IProfile {
    profile: ProfileType
}

const Profile: React.FunctionComponent<IProfile> = (
    { profile }
) => {
    return (
        <div className='profile-body'>
            <div className='header'>
                Education
            </div>
            {(profile?.education ?? []).map((educationItem, index) => {
                return (
                    <EducationList key={index} title={educationItem?.title}>
                        {educationItem.points}
                    </EducationList>
                )
            })}
        </div>
    )
};

export default Profile;
