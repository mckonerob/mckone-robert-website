import React from "react";
import "./SkillList.scss";

export interface ISkillList {

    message?: any;
    force?: boolean;
    children?: any;
}

const SkillList: React.FunctionComponent<ISkillList> = (
    props: ISkillList
) => {
    return <ol>

    </ol>
};

export default SkillList;
