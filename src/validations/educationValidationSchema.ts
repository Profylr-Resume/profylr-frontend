import * as Yup from "yup";

export const educationValidationSchema = Yup.object({
    undergraduate: Yup.object({
        instituteName: Yup.string().required("Required"),
        yearOfPassing: Yup.number().required("Required").min(1900).max(new Date().getFullYear()),
        result: Yup.number().required("Required").min(0).max(100),
        field: Yup.string().required("Required"),
    }),
    twelfthGrade: Yup.object({
        instituteName: Yup.string(),
        yearOfPassing: Yup.number().min(1900).max(new Date().getFullYear()),
        result: Yup.number().min(0).max(100),
        field: Yup.string(),
    }),
    tenthGrade: Yup.object({
        instituteName: Yup.string(),
        yearOfPassing: Yup.number().min(1900).max(new Date().getFullYear()),
        result: Yup.number().min(0).max(100),
    }),
});