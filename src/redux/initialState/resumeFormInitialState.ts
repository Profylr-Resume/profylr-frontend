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
    experiences: [],
    projects: [],
    skills: [],
};

export default initialState;
