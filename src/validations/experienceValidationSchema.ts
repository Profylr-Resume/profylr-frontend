import * as Yup from "yup";

export const experienceValidationSchema = Yup.object().shape({
    organisationName: Yup.string()
        .required("Organisation name is required")
        .trim(),
    
    position: Yup.string()
        .required("Position is required")
        .trim(),
    
    from: Yup.string()
        .required("Start date is required")
        .matches(/^\d{4}-\d{2}-\d{2}$/, "Date must be in the format YYYY-MM-DD"), // Validates format if using a string
    
    to: Yup.string()
        .required("End date is required")
        .matches(/^\d{4}-\d{2}-\d{2}$/, "Date must be in the format YYYY-MM-DD") // Validates format if using a string
        .test("is-after", "End date must be after start date", function(value) {
            const { from } = this.parent;
            return new Date(value) >= new Date(from);
        }),
    
    description: Yup.array()
        .of(Yup.string().required("Description item is required"))
        .min(1, "At least one description item is required")
});
