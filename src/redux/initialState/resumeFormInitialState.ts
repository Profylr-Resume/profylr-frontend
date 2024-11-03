import { InitialStateType } from "@/interface/InitialState.type";

const initialState: InitialStateType = {
    basicInfo: {
        name: "",
        github: "",
        linkedIn: "",
        email: "",
        phoneNumber: "",
    },
    education: {
        underGraduate: {
            instituteName: "",
            yearOfPassing: "",
            result: "",
            field: "",
        },
        twelfthGrade: {
            instituteName: "",
            yearOfPassing: "",
            result: "",
            field: "",
        },
        tenthGrade: {
            instituteName: "",
            yearOfPassing: "",
            result: "",
        },
    },
    experience: [
        {
            organisationName: "",
            position: "",
            from: "",
            to: "",
            description: [],
        },
    ],
    projects: [
        {
            name: "",
            technologiesUsed: [],
            from: "",
            to: "",
            sourceCodeRepository: "",
            liveLink: "",
            description: [],
        },
    ],
    skills: [
        {
            name: "",
            proficiencyLevel: "",
            yearsOfExperience: "",
            category: "",
            credentials: {
                certificateUrl: "",
                issuingOrganization: "",
                dateObtained: "",
                expiryDate: "",
            },
        },
    ],
};

export default initialState;
