import * as Yup from "yup";

export const basicInfoValidationSchema = Yup.object().shape({
    name: Yup.string()
        .required("Name is required"),
    
    github: Yup.string()
        .url("Invalid URL format for GitHub profile"),
    
    linkedIn: Yup.string()
        .url("Invalid URL format for LinkedIn profile"),
    
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    
    phoneNumber: Yup.string()
        .length(10, "Phone number must be exactly 10 digits")
        .matches(/^\d{10}$/, "Phone number should contain only digits")
        .required("Phone number is required")
});
