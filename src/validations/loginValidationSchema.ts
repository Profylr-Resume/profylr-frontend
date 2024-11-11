import * as Yup from "yup";

const loginValidationSchema = Yup.object().shape({
    email:Yup.string().email("Invalid email format!").required("Email is required."),
    password:Yup.string().required("Enter password")
});

export default loginValidationSchema;