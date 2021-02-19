import React from "react";

import { Profile as ProfileType } from "../../../types/types";
import WorkList from "./work-loop";


export interface IProfile {
    profile: ProfileType
}

const Profile: React.FunctionComponent<IProfile> = (
    { profile }
) => {
    return (
        <div className='profile-body'>
            <div className='header'>
                Work History
            </div>
            {(profile?.work ?? []).map((workItem, index) => {
                return (
                    <WorkList key={index} title={workItem?.title}>
                        {workItem.points}
                    </WorkList>
                )
            })}
        </div>
    )
};

export default Profile;
