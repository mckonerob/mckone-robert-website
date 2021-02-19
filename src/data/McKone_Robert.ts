import { Profile } from "../types/types"
import pic from "../components/Media/ProfilePic-McKoneRobert.png"

const McKone_Robert: Profile = {
    details: {
        name: 'Robert McKone',
        title: "Electrical and Data Engineer",
        profilePic: pic,
        address: "Brisbane, Australia",
        phone: "+61 448 336 126",
        email: "rbtmckone@gmail.com",
        socials: {
            linkedin: "/robert-mckone-03381b49/",
            github: "/mckonerob/",
            messenger: "/robert.mckone.1994/"
        }
    },

    about: {
        bio: "My name is Robert.",
    },

    work: [
        {
            title: "Thiess Pty Ltd",
            points: [
                {
                    title: "Complete java fundamentals",
                    description: "Good.",
                },
                {
                    title: "Title only",
                },
                {
                    title: "Learn to do react stuff",
                    description: "Also good.",
                }
            ]
        },
        {
            title: "Downer EDi Rail",
            points: [
                {
                    title: "Trains",
                    description: "Locomotives."
                },
                {
                    title: "Not Trains",
                    description: "Not awful."
                },
                {
                    title: "Just a Title"
                }
            ]
        }
    ],

    education: [
        {
            title: "Central Queensland University",
            points: [
                {
                    title: "Engineering Stuff",
                    description: "Good.",
                },
                {
                    title: "Physics",
                    description: "Very Good.",
                }
            ]
        },
    ],

    skills: [
        {
            title: "Mathematica",
            points: [
                {
                    title: "Mathematica by Wolfram",
                    description: "Fluent",
                    level: 5
                }
            ]
        },

        {
            title: "Python",
            points: [
                {
                    title: "A wide range of libraries",
                    description: "Professional",
                    level: 4
                }
            ]
        },

        {
            title: "C/C++",
            points: [
                {
                    title: "Pari/GP",
                    description: "Advanced",
                    level: 3
                }
            ]
        },

        {
            title: "Javascript",
            points: [
                {
                    title: "Typescript/React",
                    description: "Intermediate",
                    level: 2
                }
            ]
        }
    ]
}

export default McKone_Robert