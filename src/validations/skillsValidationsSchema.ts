import * as Yup from "yup";

export const skillsValidationsSchema = Yup.object().shape({
    name: Yup.string()
        .required("Name is required")
        .trim(),
    
    proficiencyLevel: Yup.string()
        .oneOf(["Beginner", "Intermediate", "Advanced", "Expert"], "Invalid proficiency level")
        .default("Intermediate"),
    
    yearsOfExperience: Yup.number()
        .min(0, "Experience cannot be negative")
        .max(50, "Experience must be less than or equal to 50")
        .nullable(),
    
    category: Yup.string()
        .required("Category is required")
        .oneOf([
            "Programming Languages",
            "Frameworks & Libraries",
            "Databases",
            "Tools & Platforms",
            "Soft Skills",
            "Languages",
            "Certifications",
            "Other"
        ], "Invalid category"),
    
    credentials: Yup.object().shape({
        certificateUrl: Yup.string()
            .url("Must be a valid URL")
            .nullable(),
        
        issuingOrganization: Yup.string()
            .nullable()
            .trim(),
        
        dateObtained: Yup.date()
            .nullable()
            .typeError("Must be a valid date"),
        
        expiryDate: Yup.date()
            .nullable()
            .typeError("Must be a valid date")
            .min(Yup.ref("dateObtained"), "Expiry date cannot be before date obtained")
    })
});
