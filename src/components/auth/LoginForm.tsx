import { useFormik } from "formik";
import { TextField } from "@mui/material";
import loginValidationSchema from "@/validations/loginValidationSchema";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginValidationSchema,
        onSubmit: (values) => {
            console.log("Form data", values);
        },
    });

    const handleSignUp = ()=>{
        navigate("/register");
    };

    return (
        <div className="flex items-center justify-center ">
            <form
                onSubmit={formik.handleSubmit}
                className="w-full  p-8 bg-gradient-to-tr from-themeLightGreen to-themeCream rounded-lg shadow-lg flex flex-col items-center gap-10"
            >

                {/* Email Field */}
                <TextField
                    label="Email"
                    type="email"
                    fullWidth={true}
                    required={true}
                    variant="outlined"
                    {...formik.getFieldProps("email")}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    InputProps={{
                        className: "bg-white text-gray-700 placeholder-gray-500",
                    }}
                />

                {/* Password Field */}
                <TextField
                    label="Password"
                    type="password"
                    fullWidth={true}
                    required={true}
                    variant="outlined"
                    {...formik.getFieldProps("password")}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    InputProps={{
                        className: "bg-white text-gray-700 placeholder-gray-500",
                    }}
                />

                {/* Submit Button */}
                <button
                    type="submit"
                    className="py-2 px-10 text-xl font-semibold text-white rounded-xl bg-gradient-to-r from-themeDarkGreen to-themeLightGreen hover:bg-themeDarkGreen"
                >
                    Log In
                </button>

                {/* Sign Up Link */}
                <div className="text-center text-sm text-gray-600 mt-4">
                    <p>
                        Don’t have an account?{" "}
                        <button className="text-blue-600 hover:underline font-semibold" onClick={handleSignUp}>
                            Sign up
                        </button>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
