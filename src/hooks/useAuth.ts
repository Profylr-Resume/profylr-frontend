import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { login } from "@/redux/features/authSlice";
import { useEffect } from "react";
import { AuthState } from "@/models/authState.interface";
import { RootState } from "../redux/store";

export const useAuth = (): boolean => {
    const { isAuthenticated } = useSelector((state: RootState):AuthState => state.auth);
    const dispatch = useDispatch();

    // Check for token synchronously
    const token = Cookies.get("auth_token");
    if (token && !isAuthenticated) {
        // Dispatch login synchronously if token is found and user is not authenticated
        dispatch(login(token));
    }

    return isAuthenticated;
};