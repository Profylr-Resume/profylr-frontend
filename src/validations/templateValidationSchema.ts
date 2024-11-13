import * as Yup from "yup";

export const templateValidation = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    html: Yup.string().required("HTML is required"),
    sections: Yup.array().of(
        Yup.object({
            section: Yup.object({
                _id: Yup.string().required("Section is required"),
            }),
            html: Yup.string().required("HTML is required"),
        })
    ).required("Sections are required"),
});