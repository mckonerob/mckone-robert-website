//Profile
export type ProfileSocial = {
    linkedin?: string,
    github?: string,
    messenger?: string
}
export type ProfileDetails = {
    name: string,
    title: string,
    profilePic: string,
    email: string,
    phone: string,
    address?: string,
    socials?: ProfileSocial
}
export type ProfileBio = {
    bio: string
}
export type Profile = {
    details: ProfileDetails,
    about: ProfileBio,
    work: WorkGroup[],
    education: EducationGroup[],
    skills: SkillsGroup[]
}

//Work
export type WorkGroup = {
    title: string,
    points: WorkPoints[]
}
export type WorkPoints = {
    title: string,
    description?: string,
}

//Education
export type EducationGroup = {
    title: string,
    points: EducationPoints[]
}
export type EducationPoints = {
    title: string,
    description?: string,
}

//Skills
export type SkillsGroup = {
    title: string,
    points: SkillsPoints[]
}
export type SkillsPoints = {
    title: string,
    description?: string,
    level: 1 | 2 | 3 | 4 | 5
}