import { User } from "@/types/user.interface";
import { useRegisterMutation } from "@/redux/features/authApi";
import { login } from "@/redux/features/authSlice";
import { FormikHelpers } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const useRegisterUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [registerUser] = useRegisterMutation();

    const registerUserHandler = async (  values: User,  { resetForm }: FormikHelpers<User>): Promise<void> => {
        const { name, email, password } = values;
  
        if (!name || !email || !password) {
            toast.error("Missing fields");
            return;
        }
  
        try {
            const payload = { name, email, password };
            const newUser = await registerUser(payload);
  
            if (newUser?.error) {
                toast.error(newUser?.error?.data?.message);
                return;
            }
  
            const { jwt } = newUser.data.data;
            
            dispatch(login(jwt)); // Store JWT in Redux state
            toast.success(newUser.data.data.message || "User created successfully");
            resetForm();
            navigate("/home");  // Redirect to home page
        } catch (err: unknown) {
            if (err instanceof Error) {
                toast.error(err.message);  // Use err.message safely
            } else {
                toast.error("An unknown error occurred");
            }
        }
    };
  
    return registerUserHandler;
};
  
export default useRegisterUser;