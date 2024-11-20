import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { login } from "@/redux/features/authSlice";
import { useEffect } from "react";
import { AuthState } from "@/models/authState.interface";
import { RootState } from "../redux/store";

export const useAuth = (): boolean => {
    const { isAuthenticated } = useSelector((state: RootState):AuthState => state.auth);
    const dispatch = useDispatch();

    // Only check for the token and dispatch login once on component mount
    useEffect(() => {
        const token = Cookies.get("auth_token");
        if (token) {
            dispatch(login(token)); // Dispatch the login action with the token
        }
    }, [dispatch]); // Empty dependency array ensures this only runs once

    return isAuthenticated;
};