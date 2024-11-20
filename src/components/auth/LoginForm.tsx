import { useFormik } from "formik";
import { TextField } from "@mui/material";
import loginValidationSchema from "@/validations/loginValidationSchema";
import { useNavigate } from "react-router-dom";
import useLoginUser from "@/hooks/userLoginUser";
import { User } from "../../models/user.interface";

const LoginForm = () => {

    const navigate = useNavigate();

    const loginUserHandler = useLoginUser();

    const formik = useFormik<User>({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginValidationSchema,
        onSubmit: loginUserHandler ,
    });

    const handleSignUp = ()=>{
        navigate("/register");
    };

    return (
        <div className="flex flex-col gap-4 items-center justify-center  ">
            <form
                onSubmit={formik.handleSubmit}
                className="w-full flex flex-col items-center gap-4 px-16 "
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
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            backgroundColor: "#ECDFCC", // Apply background color
                            borderRadius: "12px",      // Apply rounded corners
                        },
                        "& .MuiInputBase-input": {
                            color: "black",  
                            fontWeight:"600"           // Text color
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "gray",       // Border color
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "black",      // Border color on hover
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "blue",       // Border color when focused
                        },
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
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            backgroundColor: "#ECDFCC", // Apply background color
                            borderRadius: "12px",      // Apply rounded corners
                        },
                        "& .MuiInputBase-input": {
                            color: "black",  
                            fontWeight:"600"           // Text color
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "gray",       // Border color
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "black",      // Border color on hover
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "blue",       // Border color when focused
                        },
                    }}
                />

                {/* Submit Button */}
                <button
                    type="submit"
                    className="py-2 px-10 text-xl  text-white bg-opacity-80 bg-themeBlack rounded-xl font-bold"
                >
                    Log In
                </button>

                {/* Sign Up Link */}
                <div className="text-center text-sm text-themeBlack">
                    <p>
                        Don’t have an account?{" "}
                        <button className="text-themeCream underline tracking-wider hover:underline font-semibold" onClick={handleSignUp}>
                            Sign up
                        </button>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
