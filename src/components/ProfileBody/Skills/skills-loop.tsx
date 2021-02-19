import React from "react";

import './level-stars.scss';
export interface IProfile {
    title: string,
    children?: { title: string, description?: string, level: 1 | 2 | 3 | 4 | 5}[]
}

const SkillsList: React.FunctionComponent<IProfile> = (
    { title, children }
) => {
    return (
        <div className='profile-body'>
            <div className='company'>
                {title}
            </div>

            {(children ?? []).map((item) => {
                return (
                    <div className='point'>
                        <div className='point-title'>
                            {item?.title}
                        </div>

                        <div className='point-level'>
                            {item?.level}/5
                        </div>

                        <div className='point-level'>
                            <div className='stars-outer'>
                                <div className='stars-inner' style={{ width: `calc(100% * ${item?.level} / 5)` }}></div>
                            </div>
                        </div>

                        {item?.description && (
                            <div className='point-description'>
                                {item?.description}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    )
};

export default SkillsList;
