import { User } from "@/models/user.interface";
import { useLoginMutation } from "@/redux/features/authApi";
import { login } from "@/redux/features/authSlice";
import { FormikHelpers } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const useLoginUser = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loginUser] = useLoginMutation(); 

    const loginUserHandler = async (values: User,{ resetForm }: FormikHelpers<User>): Promise<void> => {
       
        const { email, password } = values;
      
        if (!email || !password) {
            toast.error("Please fill in all required fields.");
            return;
        }

        try {
            // Make the API call to login the user
            const response = await loginUser({ email, password });

            if (response?.error) {
                toast.error(response.error.data.message || "Login failed. Please try again.");
                return;
            }

            // Handle successful login - Store token, dispatch action, etc.
            const { jwt } = response.data.data;  // Assuming JWT is in the response as jwt
            dispatch(login(jwt));  // Dispatch login action with JWT token

            toast.success("Logged in successfully!");

            resetForm();

            navigate("/home");
        } catch (err: unknown) {
            if (err instanceof Error) {
                toast.error(err.message);  // If it's an error instance, display the message
            } else {
                toast.error("An unknown error occurred.");
            }
        }
    };

    return loginUserHandler; // Expose the handler function to use in the form
   
};

export default useLoginUser;