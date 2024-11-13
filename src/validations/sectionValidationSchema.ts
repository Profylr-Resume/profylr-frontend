import * as Yup from "yup";


export const sectionValidationSchema = Yup.object().shape({
    name:Yup.string().required("Need a name for the section!"),
    description:Yup.string().required("Need a brief description about hte section.")
});