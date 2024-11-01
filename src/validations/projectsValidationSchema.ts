import * as Yup from "yup";

export const projectValidationSchema = Yup.object().shape({
    name: Yup.string()
        .required("Project name is required")
        .min(3, "Project name must be at least 3 characters")
        .trim(),

    technologiesUsed: Yup.array()
        .of(Yup.string().required("Technology name is required"))
        .min(1, "At least one technology must be used"),

    from: Yup.string()
        .required("Start date is required")
        .matches(/^\d{4}-\d{2}$/, "Date must be in the format YYYY-MM"),

    to: Yup.string()
        .matches(/^\d{4}-\d{2}$/, "Date must be in the format YYYY-MM")
        .test("is-after-or-equal", "End date must be after or equal to start date", function (value) {
            const { from } = this.parent;
            return !value || new Date(value) >= new Date(from);
        }),

    sourceCodeRepository: Yup.string()
        .url("Must be a valid URL")
        .nullable(),

    liveLink: Yup.string()
        .url("Must be a valid URL")
        .nullable(),

    description: Yup.array()
        .of(Yup.string().required("Description item cannot be empty"))
        .min(1, "At least one description item is required")
});
