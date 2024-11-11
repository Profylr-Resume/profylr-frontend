import * as Yup from "yup";

export const personaValidationSchema = Yup.object().shape({
    experienceLevel: Yup.string()
        .oneOf(["fresher", "intermediate", "experienced"])
        .required("Experience level is required"),
    targetRole: Yup.string().required("Target role is required"),
    background: Yup.object({
        yearsOfExperience: Yup.number()
            .integer("Years of experience must be an integer")
            .positive("Years of experience must be a positive number")
            .required("Years of experience is required"),
        education: Yup.object({
            level: Yup.string()
                .oneOf(["graduated", "inCollege", "postGraduate"])
                .required("Education level is required"),
        }).required("Education is required"),
        hasProjects: Yup.boolean().required("Project information is required"),
        hasCertifications: Yup.boolean().required("Certification information is required"),
        industries: Yup.array()
            .of(Yup.string().required("Industry is required"))
            .required("At least one industry is required"),
    }).required("Background is required"),
    strengths: Yup.array()
        .of(Yup.string().required("Strength is required"))
        .required("At least one strength is required"),
    goals: Yup.array()
        .of(Yup.string().required("Goal is required"))
        .required("At least one goal is required"),
});