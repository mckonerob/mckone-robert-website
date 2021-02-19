import React from "react";

export interface IProfile {
    title: string,
    children?: { title: string, description?: string }[]
}

const WorkList: React.FunctionComponent<IProfile> = (
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

export default WorkList;
