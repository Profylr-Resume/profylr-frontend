import {useFormik } from "formik";
import { TextField, Button } from "@mui/material";
import registerValidationSchema from "@/validations/registerValidationSchema";
import { useNavigate } from "react-router-dom";

import useRegisterUser from "@/hooks/useRegisterUser";
import { User } from "@/types/user.interface";


const RegisterForm = () => {

    const navigate = useNavigate();

    const registerUserHandler = useRegisterUser();

    const formik = useFormik<User>({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        validationSchema: registerValidationSchema,
        onSubmit: registerUserHandler,
    });

    const handleLogin = ()=>{
        navigate("/login");
    };

    return (
        <div className="flex flex-col gap-4 items-center justify-center  ">
            <form
                onSubmit={formik.handleSubmit}
                className="w-full flex flex-col items-center gap-4 px-16 "
            >

                {/* Name Field */}
                <TextField
                    label="Name"
                    type="text"
                    fullWidth={true}
                    required={true}
                    variant="outlined"
                    {...formik.getFieldProps("name")}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
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
                    Register
                </button>

               
            </form>
            {/* Login Link */}
            <div className="text-center text-sm text-themeBlack">
                <p>
                        Already have an account?{" "}
                    <button  className="text-themeCream underline tracking-wider hover:underline font-semibold" onClick={handleLogin} >
                            Log in
                    </button>
                </p>
            </div>
        </div>
    );
};

export default RegisterForm;
